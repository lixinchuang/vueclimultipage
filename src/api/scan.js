/*
 * @Author: your name
 * @Date: 2020-02-17 08:10:29
 * @LastEditTime: 2020-03-09 09:05:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shuying2020\src\api\scan.js
 */
import ajax from "@/api/index";


export function getWXAppImgData(userNo,index,type){
    return ajax({
        url: `/appApi/getImageList/${userNo}/${type}/${index}/18`,
        method: 'get'
      })
}
export function getDataFromService(url){
  return ajax({
    url: url,
    method: 'get'
  })
}
export function delFileList(delArr){
    return ajax({
        url: `imageUploadServices`,
        method: 'delete',
        data:delArr
      })
}
export function getBatchId(){
  return ajax({
    url: '/imageUploadServices/batchId',
    method: 'get' 
  })
}
export function getInvoiceInfo(fileId) {
  return ajax({
    url:"/webShowImage/invoiceInfo/" +fileId,
    method: 'get'
  })
}

export function postData(url,data){
  return ajax({
    url:url,
    method: 'post',
    data
  })
} 

 
export function imagesOrder(data) {
  return ajax({
    url:"/imageUploadServices/ImagesOrder",
    method: 'POST',
    data
  })
}
export function batchSubmit(data){
  return ajax({
    url:"/imageUploadServices/batchSubmit",
    method: 'POST',
    data
  })
}

