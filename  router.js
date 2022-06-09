// router.js
import {RouterMount,createRouter} from 'uni-simple-router';
import store from './store/index.js';

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
  if ((to.name === "needLogin") && !store.state.userInfo) {
    next({
      name: 'login',
      NAVTYPE: 'push'  // 跳转到普通的界面，新开的界面保留历史记录
    })
  } else {
    next();
  }
});

export {
  router,
  RouterMount
}
