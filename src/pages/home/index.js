/*
 * @Author: your name
 * @Date: 2020-05-07 15:36:58
 * @LastEditTime: 2020-05-11 18:51:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shuying2020\src\pages\showImage\index.js
 */
import Vue from 'vue'
import App from './index.vue'
import store from '../../store'

import '../../assets/css/bootstrap.css'
 
Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
