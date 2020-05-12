/*
 * @Author: your name
 * @Date: 2020-05-07 15:36:58
 * @LastEditTime: 2020-05-12 16:53:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shuying2020\src\pages\showImage\index.js
 */
import Vue from 'vue'
import App from './index.vue'
import store from '../../store'

 
 
Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
