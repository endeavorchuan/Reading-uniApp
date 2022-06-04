<template>
	<view>
		<uni-popup ref="popup" :mask-click="false" type="bottom">
			<!-- 内容区域 -->
			<view class="popup-wrapper">
				<view class="popup-header">
					<view class="popup-header-item" @click="closePopupMasker">
						取消
					</view>
					<view class="popup-header-item" @click="sendCommentData"> 
						发布
					</view>
				</view>
				<view class="popup-content">
					<textarea class="popup-content-textarea" v-model.trim="commentsVal" placeholder="请输入评论内容" maxlength="200" />
					<view class="popup-content-count">
						{{commentsVal.length}}/200
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name:"CommentMasker",
		props: {
			showPopup: Boolean
		},
		watch: {
			showPopup(newVal) {
				newVal ? this.$refs.popup.open() : this.$refs.popup.close()
			}
		},
		data() {
			return {
				commentsVal: ''
			};
		},
		methods: {
			// 关闭评论弹窗
			closePopupMasker() {
				this.$emit('closePopupMasker', false)
			},
			
			// 通知父组件进行评论内容的发送
			sendCommentData() {
				if (!this.commentsVal) {
					uni.showToast({
						title: '请输入评论内容',
						icon: 'none'
					})
					return
				}
				this.$emit('sendCommentData', this.commentsVal)
				this.commentsVal = ''
			}
		}
	}
</script>

<style lang="scss">
@import './css/CommentMasker.scss'
</style>