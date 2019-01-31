let app =  getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSex: false,
    showtimesex: false,
    close:false,
    columns:['男','女'],
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    currentDate: '2019',
    userinfoForm:{
      babyName:'',
      babySex: '',
    }
  },
  
  showSexPop(){
    this.setData({ showSex: true });
  },
  onClosePopSex(){
    this.setData({ showSex: false });

  },
  onConfirm(event) {
    const { picker, value, index } = event.detail;
    this.setData({
      'userinfoForm.babySex': value,
      showSex: false
    })
    console.log(`当前值：${value}, 当前索引：${index}`);
  },
  onCancel() {
    this.setData({ showSex: false });
    //Toast('取消');
  },
  onShareAppMessage: function () {

  },
  // 选择男女结束
  showtime(){
    this.setData({ showtimesex: true });
    console.log(222)
  },
  onChange(event) {
    this.setData({
      currentDate: event.detail.value
    })
  },
  abolish(){
    this.setData({ showtimesex: false });
  },

  toProtocolService(){
    app.toPage("abouts-protocol-service")
  },

})