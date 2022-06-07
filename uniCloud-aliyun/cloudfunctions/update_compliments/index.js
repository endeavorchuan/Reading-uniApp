'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const {articleId, userId} = event;

	const userList = await db.collection('user').doc(userId).get();
	const thumbs_up_article_ids = userList.data[0].thumbs_up_article_ids;
	let tempArr = null;
	let returnMsg = '';
	let thumbsNumber = null;

	// 用户的操作处理
	if (thumbs_up_article_ids.includes(articleId)) {
		tempArr = dbCmd.pull(articleId)
		thumbsNumber = -1
		returnMsg = '您取消了点赞'
	} else {
		tempArr = dbCmd.addToSet(articleId)
		thumbsNumber = 1
		returnMsg = '点赞成功'
	}

	await db.collection('user').doc(userId).update({
		thumbs_up_article_ids: tempArr
	})

	// 处理文章的点赞数量
	await db.collection('article').doc(articleId).update({
		thumbs_up_count: dbCmd.inc(thumbsNumber)
	})

	//返回数据给客户端
	return {
		code: 0,
		data: {
			msg: returnMsg
		}
	}
};
