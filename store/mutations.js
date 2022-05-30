export default {
  updateUserInfo(state, userInfo) {
    uni.setStorageSync('userInfo',userInfo);	// 修改的是本地存储的用户信息
    state.userInfo = userInfo;	  // 修改store数据
  }
}