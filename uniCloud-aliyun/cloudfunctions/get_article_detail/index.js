'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {article_id} = event;
	
	const articleList = await db.collection('article')
	.aggregate()
	.match({
		_id: article_id
	})
	.end();
	
	//返回数据给客户端
	return {
		code: 0,
		msg: '文章获取成功',
		data: articleList.data[0]
	}
};
