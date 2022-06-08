'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate;

exports.main = async (event, context) => {
	const {userId} = event;

	let userInfo = await db.collection('user').doc(userId).get();
	let article_likes_ids = userInfo.data[0].article_likes_ids;	   // 获取收藏文章的数组
	let list = await db.collection('article')
		.aggregate()
		.addFields({
			is_like: $.in(['$_id', article_likes_ids])
		})
		.project({
			content: 0
		})
		.match({
			is_like: true
		})
		.end()

	//返回数据给客户端
	return {
		code: 0,
		msg: '获取数据成功',
		data: list.data
	}
};
