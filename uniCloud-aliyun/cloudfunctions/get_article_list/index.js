'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	// 接收前端传递的值
	const {classify} = event
	
	let matchObj = {}
	if (classify !== '全部') {
		matchObj = {classify}
	}
	
	const list = await db.collection('article')
	.aggregate()
	.match(matchObj)
	.project({
		content: 0
	})
	.end()
	
	//返回数据给客户端
	return {
		code: 0,
		msg: '数据获取成功',
		data: list.data
	}
};
