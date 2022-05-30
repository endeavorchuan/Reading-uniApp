export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					userRules: {
						loginName: {
							rules: [{
								required: true,
								'errorMessage': "账户名不能为空",
							}, {
								validateFunction: this.validateLoginName
							}]
						},
						password: {
							rules: [{
								required: true,
								'errorMessage': "密码不能为空",
							}]
						},
						phone: {
							rules: [{
								required: true,
								'errorMessage': "手机号码不能为空",
							}, {
								validateFunction: this.validatePhone
							}]
						},
						vCode: {
							rules: [{
								required: true,
								'errorMessage': "验证码不能为空",
							}, {
								validateFunction: this.validateCode
							}]
						}
					},
					mobileReg: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
				}
			},
			methods: {
				/* 用户名验证函数 */
				validateLoginName (rule, val, data, callback) {
					switch(true) {
						case val.length < 6:
							callback('用户名长度不正确')
							break;
						default:
							return true
					}
				},
				/* 验证用户手机 */
				validatePhone(rule, val, data, callback) {
					switch(true) {
						case !this.mobileReg.test(val):
							callback('手机号码格式不正确')
							break;
						default:
							return true
					}
				},
				/* 验证码自定义验证规则 */
				validateCode() {
					return true
				}
			}
		})
	}
}