<template>
	<view  @click.stop="_changeSaveStatus" class="save-icons">
		<uni-icons color="#ff6600" :type="isSave ? 'heart-filled' : 'heart'" :size="size"></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"SaveLikes",
		props: {
			articleId: String,
      size: {
			  type: String,
        default: '20'
      }
		},
		data() {
			return {
			};
		},
		methods: {
			async _changeSaveStatus() {
				// TODOS  判断用户是否登陆
				await this.checkedisLogin()
				// 登陆 -> 改变当前的收藏状态
				// 未登录 -> 界面的跳转，跳转到用户登录的界面
				const {msg, newUserInfo} = await this.$http.update_save_like({
					articleId: this.articleId,
					userId: this.userInfo._id
				})
				uni.showToast({
					title: msg,
					icon: 'none'
				})
				this.updateUserInfo({...this.userInfo, ...newUserInfo})
        uni.$emit('updateArticle')
			}
		},
		computed: {
			isSave() {
        try {
          return this.userInfo && this.userInfo.article_likes_ids.includes(this.articleId)
        } catch (error) {
          return false
        }
			}
		}
	}
</script>

<style>
.save-icons {
}
</style>
