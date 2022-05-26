<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<ListCard v-for="(item, index) in itemList" :key="index" :item="item"></ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"ListItem",
		data() {
			return {
				itemList: [
					{mode: 'base'},
					{mode: 'column'},
					{mode: 'image'},
					{mode: 'base'},
					{mode: 'base'},
				]
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