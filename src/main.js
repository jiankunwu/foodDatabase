// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import foodDatabaseApp from './foodDatabaseApp'
import router from './router'
import axios from 'axios'
// 官方不再更新 vue-resource 推荐axios完成 ajax 请求
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http= axios;

/* eslint-disable no-new */
new Vue({
    el: '#foodDatabaseApp',
    router,
    template: '<foodDatabaseApp/>',
    components: {foodDatabaseApp},
    render: h => h(foodDatabaseApp)
});
