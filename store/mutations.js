export default {
  updateUserInfo(state, userInfo) {
    uni.setStorageSync('userInfo',userInfo);	// 修改的是本地存储的用户信息
    state.userInfo = userInfo;	  // 修改store数据
  },
  // 修改历史记录存储
  setHistory(state, val) {
	let list = state.historyList;
	if (list.length > 0 && list.findIndex(item => item === val) > -1)
		return
	list.unshift(val);
	uni.setStorageSync('historyList', list)
	state.historyList = list
  },
  // 清空历史搜索记录
  cleanHistory(state) {
	  uni.removeStorageSync('historyList')
	  state.historyList = []
  }
}