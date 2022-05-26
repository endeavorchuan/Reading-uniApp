<template>
	<view class="home-container">
		<!-- 搜索框 -->
		<NavBar></NavBar>
		<!-- 选项卡 -->
		<TabBar :labelList="labelList"></TabBar>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._initLabelList();
		},
		data() {
			return {
				labelList: []
			}
		},
		methods: {
			_initLabelList() {
				uniCloud.callFunction({
					name: 'get_label_list',
					success:(res) => {
						this.labelList = res.result.labelList
					}
				})
			}
		},
	}
</script>

<style scoped lang="scss">
.container {
	@include flex(flex-start, column);
	color: $base-color;
}
</style>