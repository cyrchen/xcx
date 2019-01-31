const app = getApp()
Page({

  data: {

  },

  toLinkUrl(e){
    let page = e.currentTarget.dataset.page
    app.toPage(page)
  },
  onLoad: function (options) {

  },

})