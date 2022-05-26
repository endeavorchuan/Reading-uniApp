<template>
	<view class="home-container">
		<!-- 搜索框 -->
		<NavBar></NavBar>
		<!-- 选项卡 -->
		<TabBar 
			:labelList="labelList"
			:activeIndex="activeIndex"
			@changeActiveIndex="changeActiveIndex">
		</TabBar>
		<!-- 文章列表组件 -->
		<ArticleList 
			class="list-container"
			:labelList="labelList"
			:activeIndex="activeIndex"
			@changeActiveIndex="changeActiveIndex">
		</ArticleList>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._initLabelList();
		},
		data() {
			return {
				labelList: [],
				activeIndex: 0
			}
		},
		methods: {
			async _initLabelList() {
				const labelList = await this.$http.get_label_list()
				this.labelList = labelList
			},
			changeActiveIndex(index) {
				this.activeIndex = index
			}
		},
	}
</script>

<style scoped lang="scss">
	page {
		display: flex;
		height: 100%;
	}
	.home-container {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		@include flex(flex-start, column)
		align-items: inherit
	}
	.list-container {
		flex: 1;
		box-sizing: border-box;
	}
</style>