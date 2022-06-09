<template>
	<view class="follow-container">
    <view class="follow-tab">
      <view class="follow-tab-box">
        <view class="follow-tab-item" :class="{active: currentIndex === 0}" @click="currentIndex=0">
          文章
        </view>
        <view class="follow-tab-item" :class="{active: currentIndex === 1}" @click="currentIndex=1">
          作者
        </view>
      </view>
    </view>

    <!-- 内容区域 -->
    <view class="follow-list-container">
      <swiper class="follow-list-swiper" :current="currentIndex" @change="currentIndex=$event.detail.current">
        <swiper-item>
          <!-- 文章列表组件 -->
          <ListItem :articleList="articleList" :isShowLoadMore="false" v-if="articleList.length"></ListItem>
          <view class="no-data" v-if="articleDataNone">
            暂无收藏文章
          </view>
        </swiper-item>
        <swiper-item>
          <AuthorList :authorList="authorList"></AuthorList>
          <view v-if="authorDataNone" class="no-data">
            暂无关注的作者
          </view>
        </swiper-item>
      </swiper>
    </view>
	</view>
</template>

<script>
	export default {
	  onLoad() {
	    // #ifdef MP-WEIXIN
      if (!this.userInfo) {
        uni.redirectTo({
          url: 'pages/userInfo/login/login'
        })
        return
      }
      // #endif
      uni.$on('updateArticle', () => {
        this._getFollowArticle()
      })
      uni.$on('updateFollowAuthor', () => {
        this._getAuthorList()
      })
      this._getFollowArticle()
      this._getAuthorList()
    },
		data() {
			return {
			  currentIndex: 0,
        articleList: [],
        articleDataNone: false,
        authorDataNone: false,
        authorList: []
      }
		},
		methods: {
	    // 获取收藏文章
      async _getFollowArticle() {
        const list = await this.$http.get_follow_article({userId:this.userInfo._id})
        this.articleList = list
        this.articleDataNone = (list.length === 0)
      },

      // 请求关注的作者列表
      async _getAuthorList() {
        const list = await this.$http.get_follow_author({userId:this.userInfo._id})
        this.authorList = list
        this.authorDataNone = (list.length === 0)
        console.log(this.authorDataNone)
      }
		}
	}
</script>

<style lang="scss">
@import './css/follow.scss';
</style>
