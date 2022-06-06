<template>
	<view class="article-detail-container">
		<view class="detail-title">
      {{ articleData.title }}
		</view>

		<view class="detail-header">
			<view class="detail-logo">
				<image class="logo-img" :src="articleData.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">
          {{ articleData.author.author_name }}
				</view>
				<view class="detail-header-content-info">
					<text class="header-text">{{ articleData.create_time }}</text>
					<text class="header-text">{{ articleData.browse_count }} 浏览</text>
					<text class="header-text">{{ articleData.thumbs_up_count }} 赞</text>
				</view>
			</view>
			<button type="default" class="detail-header-button" @click="_followAuthor">
        {{ isFollowAuthor ? '取消关注' : '关注' }}
      </button>
		</view>

		<view class="detail-content-container">
			<view class="detail-html">
				<u-parse :content="content"></u-parse>
			</view>
			<!-- 评论内容部分 -->
			<view class="detail-comment">
				<view class="comment-title">
					最新评论
				</view>
				<view class="comment-content-container" v-for="(item, index) in commentList" :key="index">
					<CommentBox :commentData="item"></CommentBox>
				</view>
				<view v-if="commentList.length" class="no-data">
					暂无评论
				</view>
			</view>
		</view>

		<!-- 评论输入组件 -->
		<view class="detail-bottom">
			<view class="input-container" @click="openMaskerComment">
				<text class="footer-text">谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icon-box">
					<uni-icons type="chat" size="22" color="#f07373"></uni-icons>
				</view>
        <SaveLikes class="detail-bottom-icon-box" :articleId="articleData._id" size="22"></SaveLikes>
				<view class="detail-bottom-icon-box">
					<uni-icons type="hand-up" size="22" color="#f07373"></uni-icons>
				</view>
			</view>
		</view>

		<!-- 评论组件 -->
		<CommentMasker
			:showPopup="showPopup"
			@closePopupMasker="showPopup=$event"
			@sendCommentData="_sendCommentData"
		></CommentMasker>
	</view>
</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'
	import {marked} from 'marked'
  import follow from "../follow/follow";

	export default {
		components: {
			uParse
		},
		onLoad(...options) {
			this.articleData = JSON.parse(options[0].params)
			// 文章详情获取
			this._getArticleDetail()
			// 初始化获取评论列表
			this._commentList()
		},
		data() {
			return {
				articleData: null,
				showPopup: false,
				commentList: []
			}
		},
		methods: {
			async _getArticleDetail() {
				const data = await this.$http.get_article_detail({article_id: this.articleData._id})
				this.articleData = data
			},

			// 打开评论弹窗
			async openMaskerComment() {
				await this.checkedisLogin()
				this.showPopup = true
			},

			// 发送评论内容到后端
			async _sendCommentData(content) {
				const {msg} = await this.$http.update_comment({userId: this.userInfo._id, articleId: this.articleData._id, content})
				uni.showToast({
					title: msg
				})
				this.showPopup = false
			},

			// 获取文章评论列表
			async _commentList() {
				const listArr = await this.$http.get_comments({articleId: this.articleData._id})
				this.commentList = listArr
			},

      // 改变用户关注作者的状态
      async _followAuthor() {
        await this.checkedisLogin()
			  const {msg} = await this.$http.update_follow_author({authorId: this.articleData.author.id, userId: this.userInfo._id})
        uni.showToast({           // 显示弹窗
          title: msg
        })
        // 改变store里面的用户存储的数据，本地存储同样修改
        let followIds = [...this.userInfo.author_likes_ids]
        if (followIds.includes(this.articleData.author.id)) {
          followIds = followIds.filter(item => item !== this.articleData.author.id)
        } else {
          followIds.push(this.articleData.author.id)
        }
        this.updateUserInfo({...this.userInfo, author_likes_ids: followIds})
      }
		},
		computed: {
			content() {
				try {
					return marked(this.articleData.content)
				} catch (error) {
					return null
				}
			},
      // 是否关注作者
      isFollowAuthor() {
			  return this.userInfo && this.userInfo.author_likes_ids.includes(this.articleData.author.id)
      }
		}
	}
</script>

<style lang="scss">
@import './css/articleDetail.scss';
</style>
