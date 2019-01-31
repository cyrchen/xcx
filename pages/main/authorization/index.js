const app = getApp()
Page({

  data: {

  },
  
  getUserInfo(e){
    let userInfo = e.detail.userInfo
    if(!userInfo){

    }else{
      app.redirectToPage('index')
    }
    
  },
  onLoad(){
    wx.showLoading({
      title: '加载中',
    })
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          console.log('未授权')
        }
        else{
          app.redirectToPage('index')
        }
      },
      complete(res){
        wx.hideLoading()
      },
    })
  },

})