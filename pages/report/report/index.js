let app =  getApp();

  
Page({
  data: {
    test: 8
  },

  onLoad: function (options) {

  },
  toReportDetail(){
    app.toPage('report-detail')
  },
})