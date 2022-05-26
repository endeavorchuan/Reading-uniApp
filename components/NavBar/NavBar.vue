<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<!-- 专门处理APP以及小程序的导航栏 -->
			<view :style="{height: statusHeight + 'rpx'}"></view>
			<view @click="goSearchPage" class="nav-bar-content" :style="{marginRight: marginRight + 'rpx'}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-text">
					输入文章标题进行搜索
				</view>
			</view>
		</view>
		<!-- 底部的垫片 -->
		<view :style="{height: statusHeight + 80 + 'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name:"NavBar",	// 方便devtools进行内容查找
		created() {
			this.getSystemInfo();
		},
		data() {
			return {
				statusHeight: 20,
				marginRight: 0
			};
		},
		methods: {
			getSystemInfo() {
				const systemInfo = uni.getSystemInfoSync()
				systemInfo.statusBarHeight && (this.statusHeight = systemInfo.statusBarHeight * 2)
				// #ifdef MP-WEIXIN
					const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
					this.statusHeight = menuButtonInfo.top * 2
					this.marginRight = menuButtonInfo.width * 2
				// #endif
			},
			goSearchPage() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		},
	}
</script>

<style lang="scss">
	@import './css/NavBar.scss'
</style>