<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<!-- 顶部垫片，专门处理APP以及小程序的导航栏 -->
			<view :style="{height: statusHeight + 'rpx'}"></view>
			<!-- 当组建应用于搜索界面的时候，展示回退按钮 -->
			<view @click="returnArticleList" class="return-icon" :style="{top: statusHeight + 'rpx'}" v-if="isSearch">
				<uni-icons type="back" size="22" color="#fff"></uni-icons>
			</view>
			<view @click="goSearchPage" class="nav-bar-content" :style="{marginRight: marginRight + 'rpx', marginLeft: isSearch ? '20rpx' : ''}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view v-if="!isSearch" class="nav-bar-search-text">输入文章标题进行搜索</view>
				<input
				v-else
				type="text"
				class="search-input"
				v-model.trim="searchVal"
				placeholder="输入文章标题进行搜索"
				@confirm="changeInput"
				confirm-type="search">
			</view>
		</view>
		<!-- 底部的垫片 -->
		<view :style="{height: statusHeight + 80 + 'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name:"NavBar",	// 方便devtools进行内容查找
		props: {
			isSearch: {
				type: Boolean,
				default: false
			},
			parentVal: String
		},
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
				if (this.isSearch)
					return
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			returnArticleList() {
				// #ifdef H5
				uni.switchTab({
					url: '../../pages/index/index'
				})
				// #endif
				// #ifndef H5
					uni.navigateBack()
				// #endif
			},
			// 通知父组件进行搜索内容的查询
			changeInput() {
				this.$emit('sendSearchData')
			}
		},
		computed: {
			searchVal: {
				get() {
					return this.parentVal
				},
				set(val) {
					this.$emit('updateVal', val)
					if (!val) {
						this.$emit('sendSearchData')
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	@import './css/NavBar.scss'
</style>