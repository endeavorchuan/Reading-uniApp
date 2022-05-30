import Vue from 'vue'
import App from './App'
import module from 'ajax/api/index.js'
import userRuleMixin from './common/rulesMixin.js'
import commonMixin from './common/commonMixin.js'
import store from './store/index.js'
Vue.use(userRuleMixin)
Vue.use(commonMixin)
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$http = module

const app = new Vue({
    ...App,
	store
})
app.$mount()


