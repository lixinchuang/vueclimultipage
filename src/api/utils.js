/*
 * @Author: your name
 * @Date: 2020-02-19 19:19:11
 * @LastEditTime: 2020-05-12 06:39:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shuying2020\src\api\utils.js
 */


export function getFielId() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

export function calcFileSize(size) {
  let result = size / 1024;
  if (result > 1024) {
    result = result / 1024;
    return result.toFixed(2) + "MB";
  } else {
    return result.toFixed(2) + "KB";
  }
}
/**
 *  通过文件扩展名获取展示的icon
 * @param {*} fileNameExtension 
 */
export function getIconUrl(fileNameExtension) {
  let iconUrl = "";
  switch (fileNameExtension) {
    case ".doc":
    case ".docx":
      iconUrl = require("@/assets/img/util/word.png");
      break;
    case ".xlsx":
    case ".xls":
      iconUrl = require("@/assets/img/util/excel.png");
      break;
    case ".pptx":
    case ".ppt":
      iconUrl = require("@/assets/img/util/ppt.png");
      break;
    case ".pdf":
      iconUrl = require("@/assets/img/util/pdf.png");
      break;
  }

  return iconUrl;
}
/**
 * 根据文件状态获取角标
 * @param {*} fileStatus 
 */
export function getCornerMakerByFileStatus(fileStatus){
  let cornerMarker = "";
 
  switch(fileStatus){
    case "A":cornerMarker = require("@/assets/img/util/jjrpj.png");break;
    case "B":cornerMarker = require("@/assets/img/util/mgcfp.png");break;
    case "E":cornerMarker = require("@/assets/img/util/suc.png");break; 
    default:cornerMarker = require("@/assets/img/util/suc.png");break;
  }
  return cornerMarker;
}
/**
 * 根据上传结果的状态码获取角标
 * @param {*} fileStatus 
 */
export function getCornerMakerByUpLoadCode(code){
  let cornerMarker = "";
 
  switch(code){
    case "A":cornerMarker = require("@/assets/img/util/jjrpj.png");break;
    case "B":cornerMarker = require("@/assets/img/util/mgcfp.png");break;
    case "E":cornerMarker = require("@/assets/img/util/suc.png");break; 
    default:cornerMarker = require("@/assets/img/util/suc.png");break;
  }
  return cornerMarker;
}
/**
 *  获取文件扩展名
 * @param {*} fileName 
 */
export function getFileExtension(fileName) {
  let fileExtension = fileName.substring(fileName.lastIndexOf("."), fileName.length);
  return fileExtension;
}