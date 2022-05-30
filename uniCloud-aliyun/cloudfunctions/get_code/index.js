'use strict';
exports.main = async (event, context) => {
	const {phone} = event
	
	// 创建一个随机数作为验证码
	const currentNumber = Math.random().toString().substr(2, 6)
	
	try {
	    const res = await uniCloud.sendSms({
	      appid: '__UNI__283FDD2',	  // 工程ID
	      smsKey: '84b704d5e4349dac13d43e9161af9809',
	      smsSecret: '59cbc98e89010323823b9544694bf799',
	      phone,
	      templateId: '100**', // 模板的ID
	      data: {
	        code: currentNumber,
	        expMinute: '1',
	      }
	    })
	    // 调用成功，请注意这时不代表发送成功
	    return {
			code: 0,
			data: {
				msg: '请在手机上注意查收验证码',
				mobileCode: currentNumber
			}
		}
	  } catch(err) {
	    return {
	      code: 1,
	      msg: '短信验证码发送失败'
	    }
	  }
};
