<!--
 * @Author: your name
 * @Date: 2020-05-08 09:03:28
 * @LastEditTime: 2020-05-12 07:04:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shuying2020\src\pages\home\index.vue
 -->
<template>
  <div id="app">
    <button @click="toScanPage" style="color:red!important">扫描页面</button> |
    <button @click="toShowPage" style="color:red!important">查看页面</button>

     <button @click="donghua" style="color:red!important">UP</button>

     <div style="border:1px solid #000;width:200px;height:auto;position:fixed;bottom:0px;right:10px">
         <div style="height:40px;line-height:40px;padding-left:20px;border-bottom:1px solid #ccc;width:100%">1234</div>
       
            <div class="vbody" :class="showbody==true?'nomarl':'min'"></div>
        
        
     </div>
  </div>
</template>
<script>

import Vue from 'vue'
import VueSwal from 'vue-swal'
Vue.use(VueSwal)

export default {
  name: "home",
  data(){
    return {
      showbody:false
    }
  },
  methods: {
    
    toScanPage() {
   
      location.href = "http://localhost:9529/ImagesScan.html";
    },
  
    toShowPage() {
      location.href = "http://localhost:9529/showImages.html";
    }
  }
};
</script>
<style>
.vbody{
width:100%;
transition: height 1.2s;
}
.min {
  height: 0px;
}
.nomarl {
  height: 460px;
}
</style>