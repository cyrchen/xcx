let app =  getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scanCode: '',
  },
  scan(){
    let that = this
    wx.scanCode({
      scanType:['barCode'],
      success(res) {
        let result = res.result
        console.log(res)
        that.setData({
          scanCode: result
        })
      },
      fail(res){
        
      },
    })
  },
  getScanCodeByInput(e){
    this.setData({
      scanCode: e.detail.value
    })
  },
  onLoad: function (options) {
    // this.scan()
  },

  toBindUserInfo(){
    app.toPage("box-userinfo-from")
  },

  
})