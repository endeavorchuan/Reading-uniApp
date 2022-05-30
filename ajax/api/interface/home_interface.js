// 首页面的请求

import ajax from '../../http.js'

export const get_label_list = data => ajax({
	name: 'get_label_list',
	data
})

// 获取文章列表
export const get_article_list = data => ajax({
	name: 'get_article_list',
	data
})

// 收藏或取消收藏文章
export const update_save_like = data => ajax({
	name: 'update_save_like',
	data
})