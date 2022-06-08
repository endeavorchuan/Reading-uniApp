<template>
	<view class="follow-container">
    <view class="follow-tab">
      <view class="follow-tab-box">
        <view class="follow-tab-item" :class="{active: currentIndex === 0}">
          文章
        </view>
        <view class="follow-tab-item" :class="{active: currentIndex === 1}">
          作者
        </view>
      </view>
    </view>

    <!-- 内容区域 -->
    <view class="follow-list-container">
      <swiper class="follow-list-swiper" :current="currentIndex">
        <swiper-item>
          <!-- 文章列表组件 -->
          <ListItem :articleList="articleList" :isShowLoadMore="false" v-if="articleList.length"></ListItem>
          <view class="no-data" v-if="dataNone">
            暂无收藏文章
          </view>
        </swiper-item>
        <swiper-item>
          2
        </swiper-item>
      </swiper>
    </view>
	</view>
</template>

<script>
	export default {
	  onLoad() {
	    // #indef MP-WEIXIN
      if (!this.userInfo) {
        uni.redirectTo({
          url: 'pages/userInfo/login/login'
        })
        return
      }
      // #endif
      this._getFollowArticle()
    },
		data() {
			return {
			  currentIndex: 0,
        articleList: [],
        dataNone: false
      }
		},
		methods: {
	    // 获取收藏文章
      async _getFollowArticle() {
        const list = await this.$http.get_follow_article({userId:this.userInfo._id})
        this.articleList = list
        this.dataNone = (list.length === 0)
      }
		}
	}
</script>

<style lang="scss">
@import './css/follow.scss';
</style>
