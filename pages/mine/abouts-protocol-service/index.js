let app =  getApp();

  
Page({
  data: {
    agreeProtocol:true
  },

  changeAgreeProtocol(){
    console.log(1)
    this.setData({
      agreeProtocol: !this.data.agreeProtocol
    })
  },

  tobindSuccess(){
    app.toPage("bind-success")
  },
})