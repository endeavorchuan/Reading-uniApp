<template>
	<view  @click.stop="_changeSaveStatus" class="save-icons">
		<uni-icons color="#ff6600" type="heart" size="20"></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"SaveLikes",
		data() {
			return {
				
			};
		},
		methods: {
			async _changeSaveStatus() {
				// TODOS  判断用户是否登陆
				// 登陆 -> 改变当前的收藏状态
				// 未登录 -> 界面的跳转，跳转到用户登录的界面
				uni.navigateTo({
					url: '/pages/userInfo/login/login',
					fail(error) {
						console.log(error)
					}
				})
			}
		}
	}
</script>

<style>
.save-icons {
}
</style>