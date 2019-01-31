const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedAgreement: true,

    showSevenpop: false, //7天退货
    showInvoicepop: false, //发票
    showStatementpop: false, //隐私声明
  },
  changeAgreementChecked(){
    this.setData({
      checkedAgreement: !this.data.checkedAgreement
    })
  },
  /* 7天无理由Pop */
  showSevenpop(){
    this.setData({
      showSevenpop: true
    })
  },
  closeSevenpop(){
    this.setData({
      showSevenpop: false
    })
  },
  /* 开票Pop */
  showInvoicepop(){
    this.setData({
      showInvoicepop: true
    })
  },
  closeInvoicepop(){
    this.setData({
      showInvoicepop: false
    })
  },
  /* 隐私Pop */
  showStatementpop(){
    this.setData({
      showStatementpop: true
    })
  },
  closeStatementpop(){
    this.setData({
      showStatementpop: false
    })
  },

  // 提交订单
  orderSubmit(){
    let that = this
    this.setData({
      orderButnLoading: true
    },()=>{
      wx.showModal({
        title: '提示',
        content: '支付测试弹框',
        success(res) {
          that.setData({
            orderButnLoading: false
          })
          if (res.confirm) {
            app.toLinkPage('/pages/order/pay-result/index')
          } else if (res.cancel) {
            app.echoErr('支付失败')
          }
        }
      })
    })
  },
})