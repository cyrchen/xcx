// pages/gather/persongae/index
Page({

  data: {
    
    showSex:false,
    close:false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    
    userinfoForm:{
      babyName:'',
      babySex: '',
    },
    columns:['男','女'],
    onSelect(event) {
      console.log(event.detail);
    },
   
  },
  
  onLoad(){
    console.log(1)
  },

  // 弹出时间开始
  showtime(){
    this.setData({ showtimesex: true });
    console.log(222)
  },
  onDateChange(event) {
    console.log(999,event)
    this.setData({
      currentDate: event.detail.value
    })
  },
  abolish(){
    this.setData({ showtimesex: false });
  },
  // 关闭选择时间结束

  // 选择弹出男女弹窗
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

})

