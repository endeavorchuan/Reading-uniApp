'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	const {userId, articleId, content} = event;
	
	// 获取用户信息
	let user = await db.collection('user').doc(userId).get()
	user = user.data[0]
		
	// 获取文章的数据表
	// const article = await db.collection('article').doc(articleId).get()
	
	let commentObj = {
		comment_id: generatedId(5),	// 生成一个唯一的id值
		comment_content: content,
		create_time: Date.now(),
		is_reply: false,
		replyArr: [],
		author: {
			author_id: user._id,
			author_name: user.author_name,
			avatar: user.avatar,
			professional: user.professional
		}
	}
	
	commentObj = dbCmd.unshift(commentObj)
	
	await db.collection('article').doc(articleId).update({commentObj})
	
	// 生成唯一ID的方法
	function generatedId(num) {
		return Number(Math.random().toString().substr(3, num) + Date.now()).toString(36)
	}
		
	//返回数据给客户端
	return {
		code: 0,
		data: {
			msg: '添加数据成功'
		}
	}
};
