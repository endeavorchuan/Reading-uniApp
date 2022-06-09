// 用户信息相关的请求

import ajax from '../../http.js'

// 用户登陆
export const user_login = data => ajax({
	name: 'user_login',
	data
})

// 发送验证码
export const get_code = data => ajax({
	name: 'get_code',
	data
})

// 获取收藏文章
export const get_follow_article = data => ajax({
	name: 'get_follow_article',
	data
})

// 获取关注的作者
export const get_follow_author = data => ajax({
	name: 'get_follow_author',
	data
})
