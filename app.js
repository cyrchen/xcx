
import {echoErr,toPageByRouter,redirectToPageByRouter} from './assets/js/common'


import {toLinkPage} from './src/router/index'
App({
  // yes testDev 1

  baseRequest: {

    APPID: '',
    baseUri: "http://47.100.174.37:8080",
    Cookie: "",
    authorization: "Basic Z2VuZV9taW5pOmdlbmVfMTIzNDU2", //必传，校验用户 header里面
    
    sKey: "", //token秘钥
    header: {
      'content-type': 'application/json'
    },
    postHeader: {
      'content-type': 'application/x-www-form-urlencoded'
    },
  },
  baseUser: {
    user: null,
    addrInfo: {}
  },
  baseSystemInfo: {
    isIphoneX: false,
    systemInfo: null,
  },
  baseEventBus: {
    test: 1
  },
  globalData: {
    test: 1
  },
  request(options){
    const app = this;
    options.url = app.baseRequest.baseUri + options.url;
    if(!options.header){
      options.header = {}
    }
    options.header['sKey'] = app.baseRequest.sKey;
    options.header['authorization'] = app.baseRequest.authorization;
  
    /* const oldSuccess = options.success;
    if (oldSuccess) options.success = function (res) {
      console.log('[requestSuccess]:', res, res.statusCode);
      switch (res.statusCode) {
        case 401: {
          console.error('没有sKey');
        }
        break;
        case 404: {
          console.error('404');
        }
        break;
        default: {
          oldSuccess(res); //code正确的状态
        }
      }
    };
    const oldFail = options.fail;
    if (oldFail) options.fail = function (res) {
      console.log(' ================ ',res)
      oldFail(res)
    }; */

    const oldComplete = options.complete;
    if (oldComplete) options.complete = function (res) {
      console.log('[requestInfo]:', res, res.statusCode);
      switch (res.statusCode) {
        case 200: {
          console.log('success')
        }
        break;
        case 401: {
          console.error('没有sKey');
        }
        break;
        case 404: {
          console.error('404');
        }
        break;
        default: {
          console.log('other')
        }
      }
      oldComplete(res)
    };
    wx.request(options)
  },
  
  onLaunch(){
    const app = this
    wx.getSystemInfo({
      success: function(res) {
        app.baseSystemInfo.systemInfo = res
        var model = res.model
        if (model.search('iPhone X') != -1){
          app.baseSystemInfo.isIphoneX = true;
        }else{
          app.baseSystemInfo.isIphoneX = false;
        }
     }
    })
  },

  echoErr:echoErr,
  toLinkPage:toLinkPage,
  toPage:toPageByRouter,
  redirectToPage:redirectToPageByRouter
})