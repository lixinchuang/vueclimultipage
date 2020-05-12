/*
 * @Author: your name
 * @Date: 2020-02-19 19:47:16
 * @LastEditTime: 2020-04-09 07:32:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shuying2020\src\api\webShowImage.js
 */
import ajax from "@/api/index";

export function webShowImageList(businessNo,pageIndex){
    return ajax({
        url: `/webShowImage/${businessNo}/${pageIndex}/8`,
    
        method: 'get'
      })
}

export function getDocumentList(businessNo){
  
    return ajax({
        url: `/webShowImage/getDocumentList/${businessNo}`,
        method: 'get'
      })
}
export function invoiceInfo(fileId){
  return ajax({
    url: `/webShowImage/invoiceInfo/${fileId}`,
    method: 'get'
  })
}

export function updateBillState(data){
   
   return ajax({
    url: "/webShowImage/updateBillState",
    method: 'post',
    data
  })
}

export function getImageBase64(fileId){
  return ajax({
    url: `/webShowImage/getImageBase64/${fileId}`,
    method: 'get'
  })
  
}