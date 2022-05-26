<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<ListCard v-for="(item) in articleList" :key="item._id" :item="item"></ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"ListItem",
		props: {
			articleList: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.list-scroll-container {
		height: 100%;
		.list-scroll {
			overflow: hidden;
			height: 100%;
			box-sizing: border-box;
		}
	}
</style>