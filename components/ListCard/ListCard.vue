<template>
	<view>
		<!-- 基础卡片 -->
		<view class="list-card" v-if="item.mode === 'base'">
			<view class="list-card-img">
				<image src="https://tva1.sinaimg.cn/large/008i3skNly1gshp1imuagj30r85vg7ri.jpg" mode="aspectFill"></image>
			</view>
			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>《故宫博物院》集训营直播课开讲啦（4月17号）《故宫博物院》集训营直播课开讲啦（4月17号）《故宫博物院》集训营直播课开讲啦（4月17号）</text>
					<SaveLikes></SaveLikes>
				</view>
				<view class="list-card-content-desc">
					<view class="article-type">
						精彩直播
					</view>
					<view class="browse-number">
						293浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view class="list-card mode-column" v-if="item.mode === 'column'">
			<view class="list-card-top">
				<text>《故宫博物院》集训营直播课开讲啦（4月17号）</text>
				<SaveLikes></SaveLikes>
			</view>
			<view class="list-card-middle">
				<view class="image-container" v-for="(item, index) in 3" :key="index">
					<image src="https://tva1.sinaimg.cn/large/008i3skNly1gshp1imuagj30r85vg7ri.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-card-content-desc list-card-bottom">
				<view class="article-type">
					精彩直播
				</view>
				<view class="browse-number">
					293浏览
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="list-card mode-image" v-if="item.mode==='image'">
			<view class="list-card-top">
				<view class="image-container">
					<image src="https://tva1.sinaimg.cn/large/008i3skNly1gshp1imuagj30r85vg7ri.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-card-middle">
				<text>《故宫博物院》集训营直播课开讲啦</text>
				<SaveLikes></SaveLikes>
			</view>
			<view class="list-card-content-desc list-card-bottom">
				<view class="article-type">
					精彩直播
				</view>
				<view class="browse-number">
					293浏览
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"ListCard",
		props: {
			item: Object
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	@import './css/ListCard.scss'
</style>