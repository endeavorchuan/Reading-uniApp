export default ({name, data={}}) => {
	// 返回一个Promise对象
	return new Promise((resolve, reject) => {
		// 因为请求不知道什么时候返回，所以先打开Loading弹窗
		uni.showLoading({})
		// uniCloud函数调用，真正的发起数据的请求
		uniCloud.callFunction({
			name,	// 云函数的名字
			data,
			success({result}) {	   // 成功的状态
				if (result.code === 0) {	// 能够拿到数据值
					resolve(result.data)
				} else {
					uni.showToast({		// 提示框，一般是后端没有查询到数据值
						icon: "none",
						title: result.msg
					})
				}
			},
			fail(err) {		// 请求失败，一般是网络原因，或是后端的错误
				reject(err)
			},
			complete() {	// 完成的状态
				uni.hideLoading()	// 关闭弹窗（Loading弹窗）
			}
		})
	})
}