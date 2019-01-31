
let app =  getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choosetime: false
  },
  choosetime(){
    this.setData({ choosetime: true });
  },
  onClose() {
    this.setData({ choosetime: false });
  },

  toReportDetail(){
    app.toPage("report-detail")
  },
})