import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store.js'

// 初始化html font-size
import 'lib-flexible';

// 初始化reset.css
import "@/assets/css/common/reset.css";
import { Checkbox,Button } from 'vant';

//  引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(Checkbox).use(Button);


import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'yetRvRWWl4QUQbds8bvUZo6aRGwVI10y'
})



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

