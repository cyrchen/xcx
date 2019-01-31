const app = getApp()
Page({

  data: {
    show: false,
    actions: [
      {
        name: '021-888888',
        disabled: true
      },
      {
        id:'call',
        name: '呼叫',
      }
    ]
  },
  showActionSheet(){
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  calcle(){
    this.setData({ show: false });
  },

  toLinkOPage(e){
    let page = e.currentTarget.dataset.page
    app.toLinkPage(page)
  },
  onSelect(event) {
    console.log(2)
    if(event.detail.id && event.detail.id == "call"){
      wx.makePhoneCall({
        phoneNumber: '888888' 
      })
    }
  }

})