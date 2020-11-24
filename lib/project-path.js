// const path = require('path');

let pathList = {
  '官网true': 'websiteClean',
  '后台管理系统true': 'backStageClean',
  'templatetrue': 'VueCliClean',
}

module.exports = function templatePath (key) {
  let attr = '';
  for(i in key) {
    attr += key[i]
  }
  return pathList[attr]
}