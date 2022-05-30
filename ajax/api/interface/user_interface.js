// 用户信息相关的请求

import ajax from '../../http.js'

// 用户登陆
export const user_login = data => ajax({
	name: 'user_login',
	data
})