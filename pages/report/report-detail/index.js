let app =  getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeStep : 2,
    reportSteps:[
      {
        title:'成功购买并绑定采集盒',
        tip:'收到采集盒后请在一个月内使用噢~',
        butnText: '查看物流',
        butnLink: ''
      },{
        title:'华夏源检测中心确认收货',
      },{
        title:'DNA采集中',
      },{
        title:'DNA检测中',
      },{
        title:'检测结果生成',
      },
    ]
  },
  toLinkPage(e){
    let page = e.currentTarget.dataset.page
    app.toPage(page)
  },
  

})