<template>
	<view class="login-container">
		<image src="../../../static/img/login_bg.png" class="banner-bg" mode=""></image>
		<!-- 导航 -->
		<view class="login-nav">
			<view class="nav-item" @click="changeLoginType('account')" :class="{'active': type==='account'}">
				账号登录
			</view>
			<view class="nav-item" @click="changeLoginType('mobile')" :class="{'active': type!=='account'}">
				手机登陆
			</view>
		</view>
		<!-- 表单部分 -->
		<uni-forms class="forms" ref="form" :modelValue="formData">
			<view class="" v-if="type === 'account'">
				<uni-forms-item label="账号" name="loginName">
					<input
						placeholder-class="placeholder"
						class="form-input"
						type="text"
						value="" 
						placeholder="请输入账号"
						v-model="formData.loginName"
					/>
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<uni-easyinput
						:inputBorder="false"
						placeholder-class="placeholder"
						class="form-input"
						type="password"
						value="" 
						placeholder="请输入密码"
						v-model="formData.password"
					></uni-easyinput>
				</uni-forms-item>
			</view>
			<view class="" v-else>
				<uni-forms-item label="手机号" name="phone">
					<input
						placeholder-class="placeholder"
						class="form-input"
						type="number"
						value="" 
						placeholder="请输入手机号"
						v-model="formData.phone"
					/>
				</uni-forms-item>
				<uni-forms-item label="验证码" name="vCode">
					<input
						placeholder-class="placeholder"
						class="form-input"
						type="text"
						value="" 
						placeholder="请输入验证码"
						v-model="formData.vCode"
					/>
					<SendCode @sentCurrentCode="returnCode=$event" @getForm="getForm"></SendCode>
				</uni-forms-item>
			</view>
			<button class="login-btn" @click="_userLoginSubmit">立即登陆</button>
		</uni-forms>
		<view class="footer-select-container">
			<text>注册</text>
			<text>忘记密码</text>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		onReady() {
			this.$refs.form.setRules(this.userRules)
		},
		data() {
			return {
				type: 'account',
				formData: {
					loginName: '',
					passWord: '',
					phone: "",
					vCode: ''
				},
				returnCode: null
			}
		},
		methods: {
			async _userLoginSubmit() {
				const res = await this.$refs.form.submit()
				// 发送数据到后端
				this._sendUserInfo({...res, type: this.type})
			},
			
			/* 改变当前登陆类型 */
			changeLoginType(type) {
				this.type = type
				this.$refs.form.clearValidate([])	// 清空校验规则
			},
			
			/* 发送数据到后端 */
			async _sendUserInfo(data) {
				const userInfo = await this.$http.user_login(data)
				if (userInfo) {
					// 使用store的形式进行存储
					this.updateUserInfo(userInfo)
					uni.showToast({
						title: '用户登录成功',
						icon: 'none'
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}
			},
			
			/* 向验证码组件发送form表单 */
			getForm(cb) {
				cb && cb(this.$refs.form)
			},
			
			...mapMutations(['updateUserInfo'])
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}
</style>

<style lang="scss" scoped>
@import './css/login.scss'
</style>
