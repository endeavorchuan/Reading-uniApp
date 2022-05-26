<template>
	<view class="tab">
		<!-- 滚动区域 -->
		<scroll-view scroll-x="true" class="tab-scroll" scroll-with-animation="true" :scroll-into-view="currentIndex">
			<view class="tab-scroll-box">
				<view 
					:class="{active: activeIndex === index}"
					class="tab-scroll-item"
					@click="changeActiveIndex(index)"
					v-for="(item, index) in labelList"
					:key="index"
					:id="`item${index}`">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<!-- 图标部分 -->
		<view class="tab-icon">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name:"TabBar",
		props: {
			labelList: Array,
			activeIndex: Number
		},
		watch: {
			activeIndex(index) {
				this.currentIndex = `item${index}`
			}
		},
		data() {
			return {
				currentIndex: 'item0'
			}
		},
		methods: {
			changeActiveIndex(index) {
				this.$emit('changeActiveIndex', index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './css/TabBar.scss';
</style>