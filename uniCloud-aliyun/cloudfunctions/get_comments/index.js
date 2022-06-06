'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {articleId, pageSize=10, page=1} = event
	
	const list = await db.collection('article')
		.aggregate()
		.match({
			_id: articleId
		})
		.unwind('$commentObj')
		.project({
			_id: 0,
			commentObj: 1
		})
		.replaceRoot({
			newRoot: '$commentObj'
		})
		.skip(pageSize * (page-1))
		.limit(pageSize)
		.end()
	
	//返回数据给客户端
	return {
		code: 0,
		msg: '评论内容获取成功',
		data: list.data
	}
};
