<template>
	<view>
		follow page
	</view>
</template>

<script>
	export default {
	  onLoad() {
	    // #indef MP-WEIXIN
      if (!this.userInfo) {
        uni.redirectTo({
          url: 'pages/userInfo/login/login'
        })
        return
      }
      // #endif
    },
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
