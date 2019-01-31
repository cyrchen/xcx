const app = getApp();

  
Component({
  properties: {
    
  },

  
  data: {
    isIphoneX: false
  },
  
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() { 
      let that = this
      if(!app.baseSystemInfo.systemInfo){
        this.isIphoneX = app.baseSystemInfo.isIphoneX
      }else{
        wx.getSystemInfo({
          success: function(res) {
            app.baseSystemInfo.systemInfo = res
            let model = res.model
            if (model.search('iPhone X') != -1){
              app.baseSystemInfo.isIphoneX = true;
              that.setData({
                isIphoneX: true
              })
            }else{
              app.baseSystemInfo.isIphoneX = false;
              that.setData({
                isIphoneX: false
              })
            }
         }
        })
      }
    },
    moved() { },
    detached() { },
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() { },
    hide() { },
    resize() { },
  },

  methods: {
   
  }
})