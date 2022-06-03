<template>
	<view class="article-detail-container">
		<view class="detail-title">
			《故宫博物院》集训营直播课开讲了（4月17号）
		</view>
		
		<view class="detail-header">
			<view class="detail-logo">
				<image class="logo-img" src="../../static/img/logo.jpeg" mode="aspectFill"></image>
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">
					WEB讲师
				</view>
				<view class="detail-header-content-info">
					<text class="header-text">2020.03.16 17:50</text>
					<text class="header-text">173 浏览</text>
					<text class="header-text">6 赞</text>
				</view>
			</view>
			<button type="default" class="detail-header-button">取消关注</button>
		</view>
		
		<view class="detail-content-container">
			<view class="detail-html">
				文本内容
			</view>
		</view>
		
		<!-- 评论输入组件 -->
		<view class="detail-bottom">
			<view class="input-container">
				<text class="footer-text">谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icon-box">
					<uni-icons type="chat" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom-icon-box">
					<uni-icons type="heart" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom-icon-box">
					<uni-icons type="hand-up" size="22" color="#f07373"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
@import './css/articleDetail.scss'
</style>
