(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"19eb":function(t,e,a){"use strict";a.r(e);var n=a("7450"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},4048:function(t,e,a){var n=a("758b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("1f314b13",n,!0,{sourceMap:!1,shadowMode:!1})},"40d6":function(t,e,a){"use strict";a.r(e);var n=a("799c"),r=a("533a");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("c91b");var s,c=a("f0c5"),o=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"86609f34",null,!1,n["a"],s);e["default"]=o.exports},"4a24":function(t,e,a){"use strict";var n=a("4048"),r=a.n(n);r.a},"4b30":function(t,e,a){var n=a("7d8b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("55ebf596",n,!0,{sourceMap:!1,shadowMode:!1})},"533a":function(t,e,a){"use strict";a.r(e);var n=a("62ca"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"62ca":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i=n(a("5530")),s=a("26cb"),c={data:function(){return{isSearch:!0,searchList:[],parentVal:"",isShowHistory:!0}},methods:(0,i.default)((0,i.default)({_sendSearchData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isShowHistory=!1,t.parentVal){e.next=5;break}return t.isShowHistory=!0,t.searchList=[],e.abrupt("return");case 5:return e.next=7,t.$http.get_search_data({searchVal:t.parentVal});case 7:a=e.sent,n=a.articleList,t.searchList=n;case 10:case"end":return e.stop()}}),e)})))()},saveSearchHistory:function(){console.log(this.parentVal),this.setHistory(this.parentVal)}},(0,s.mapMutations)(["setHistory","cleanHistory"])),{},{openHistory:function(t){this.parentVal=t,this._sendSearchData()}}),computed:(0,i.default)({},(0,s.mapState)(["historyList"]))};e.default=c},7450:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"NavBar",props:{isSearch:{type:Boolean,default:!1},parentVal:String},created:function(){this.getSystemInfo()},data:function(){return{statusHeight:20,marginRight:0}},methods:{getSystemInfo:function(){var t=uni.getSystemInfoSync();t.statusBarHeight&&(this.statusHeight=2*t.statusBarHeight)},goSearchPage:function(){this.isSearch||uni.navigateTo({url:"/pages/search/search"})},returnArticleList:function(){uni.switchTab({url:"../../pages/index/index"})},changeInput:function(){this.$emit("sendSearchData")}},computed:{searchVal:{get:function(){return this.parentVal},set:function(t){this.$emit("updateVal",t),t||this.$emit("sendSearchData")}}}};e.default=n},"758b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 添加一个flex布局的混编方法 */\n/* 全局系统样式定义 */.nav-bar[data-v-017ef1a6]{\n  /* 搜索界面单独样式添加 */}.nav-bar .nav-bar-top[data-v-017ef1a6]{position:fixed;top:0;left:0;z-index:99;width:100%;background-color:#f25037;padding:%?0?% %?30?% %?20?%;box-sizing:border-box}.nav-bar .nav-bar-top .nav-bar-content[data-v-017ef1a6]{display:flex;align-items:center;justify-content:flex-start;flex-wrap:nowrap;flex-direction:row;height:%?60?%;background-color:#fff;border-radius:%?30?%;flex-grow:1;padding-left:%?20?%;box-sizing:border-box}.nav-bar .nav-bar-top .nav-bar-search-text[data-v-017ef1a6]{font-size:%?28?%;width:100%;margin-left:%?20?%;color:#999}.nav-bar .return-icon[data-v-017ef1a6]{position:absolute;height:%?60?%;left:0;display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;flex-direction:row}.nav-bar .search-input[data-v-017ef1a6]{font-size:%?28?%;color:#999;width:100%;text-indent:%?20?%}',""]),t.exports=e},"799c":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={NavBar:a("b6b5").default,ListItem:a("53d3").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"search-container"},[a("NavBar",{attrs:{isSearch:t.isSearch,parentVal:t.parentVal},on:{updateVal:function(e){arguments[0]=e=t.$handleEvent(e),t.parentVal=e},sendSearchData:function(e){arguments[0]=e=t.$handleEvent(e),t._sendSearchData.apply(void 0,arguments)}}}),t.isShowHistory?a("v-uni-view",{staticClass:"search-wrapper"},[a("v-uni-view",{staticClass:"search-history-container"},[a("v-uni-view",{staticClass:"search-header"},[a("v-uni-text",{staticClass:"history-text"},[t._v("搜索历史")]),a("v-uni-text",{staticClass:"history-clean",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cleanHistory.apply(void 0,arguments)}}},[t._v("清空")])],1),t.historyList.length?a("v-uni-view",{staticClass:"search-history-content"},t._l(t.historyList,(function(e,n){return a("v-uni-view",{key:e,staticClass:"history-content-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openHistory(e)}}},[t._v(t._s(e))])})),1):a("v-uni-view",{staticClass:"no-data"},[t._v("当前没有搜索历史")])],1)],1):a("v-uni-view",{staticClass:"search-list-container"},[t.searchList.length?a("ListItem",{attrs:{isShowLoadMore:!1,articleList:t.searchList},on:{saveSearchHistory:function(e){arguments[0]=e=t.$handleEvent(e),t.saveSearchHistory.apply(void 0,arguments)}}}):a("v-uni-view",{staticClass:"no-data"},[t._v("没有搜索到相关数据")])],1)],1)},i=[]},"7d8b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 添加一个flex布局的混编方法 */\n/* 全局系统样式定义 */uni-page-body[data-v-86609f34]{background-color:#f5f5f5;height:100%;display:flex}.search-container[data-v-86609f34]{flex:1;display:flex;flex-direction:column}.search-container .search-wrapper[data-v-86609f34]{background-color:#fff;margin-bottom:%?20?%}.search-container .search-wrapper .search-header[data-v-86609f34]{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row;font-size:%?28?%;color:#666;padding:%?20?% %?30?%;border-bottom:1px solid #f5f5f5}.search-container .search-wrapper .search-header .history-text[data-v-86609f34]{color:#f25037}.search-container .search-wrapper .search-header .history-clean[data-v-86609f34]{color:#30b33a;font-weight:700}.search-container .search-wrapper .search-history-content[data-v-86609f34]{display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;flex-direction:row;padding:%?30?%;padding-top:0}.search-container .search-wrapper .search-history-content .history-content-item[data-v-86609f34]{padding:%?4?% %?20?%;margin-top:%?24?%;margin-right:%?20?%;border-radius:%?10?%;border:1px solid #666;font-size:%?28?%;color:#666}.search-container .no-data[data-v-86609f34]{height:%?400?%;line-height:%?400?%;width:100%;text-align:center;font-size:%?24?%;color:#666}.search-container .search-list-container[data-v-86609f34]{height:100%;flex:1;overflow:hidden}body.?%PAGE?%[data-v-86609f34]{background-color:#f5f5f5}',""]),t.exports=e},b6b5:function(t,e,a){"use strict";a.r(e);var n=a("ce36"),r=a("19eb");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("4a24");var s,c=a("f0c5"),o=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"017ef1a6",null,!1,n["a"],s);e["default"]=o.exports},c91b:function(t,e,a){"use strict";var n=a("4b30"),r=a.n(n);r.a},ce36:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uniIcons:a("28f9").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"nav-bar"},[a("v-uni-view",{staticClass:"nav-bar-top"},[a("v-uni-view",{style:{height:t.statusHeight+"rpx"}}),t.isSearch?a("v-uni-view",{staticClass:"return-icon",style:{top:t.statusHeight+"rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returnArticleList.apply(void 0,arguments)}}},[a("uni-icons",{attrs:{type:"back",size:"22",color:"#fff"}})],1):t._e(),a("v-uni-view",{staticClass:"nav-bar-content",style:{marginRight:t.marginRight+"rpx",marginLeft:t.isSearch?"20rpx":""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSearchPage.apply(void 0,arguments)}}},[a("uni-icons",{attrs:{type:"search",color:"#999"}}),t.isSearch?a("v-uni-input",{staticClass:"search-input",attrs:{type:"text",placeholder:"输入文章标题进行搜索","confirm-type":"search"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.changeInput.apply(void 0,arguments)}},model:{value:t.searchVal,callback:function(e){t.searchVal="string"===typeof e?e.trim():e},expression:"searchVal"}}):a("v-uni-view",{staticClass:"nav-bar-search-text"},[t._v("输入文章标题进行搜索")])],1)],1),a("v-uni-view",{style:{height:t.statusHeight+80+"rpx"}})],1)},i=[]}}]);