let app =  getApp();

  
Page({

  data: {
    showBox: false
  },
  showBuyBox(e){
    this.setData({
      showBox: true
    })
  },
  choleBuyBox(){
    this.setData({
      showBox: false
    })
  },
  toPreOrder(){
    app.toPage('pre-order')
  },
})