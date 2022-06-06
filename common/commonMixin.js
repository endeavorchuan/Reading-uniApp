import {mapState, mapMutations} from 'vuex'

export default {	
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					
				}
			},
			methods: {
				checkedisLogin() {
					// 获取用户的信息
					return new Promise(resolve => {
						if (this.userInfo) {	// 当前的userInfo中有值
							resolve()
						} else {	// 未读取到用户信息，即没有登陆
							uni.navigateTo({
								url: '/pages/userInfo/login/login',
								fail(error) {
									console.log(error)
								}
							})
						}
					})
				},
				...mapMutations(['updateUserInfo'])
			},
			computed: {
				...mapState(['userInfo'])
			}
		})
	}
}
