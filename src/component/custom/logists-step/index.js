// src/component/steps/steps.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeStep: {
      type: Number,
      value: 2
    },
    steps:{
      type:Array,
      value:[]
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _toLinkPage(e){
      let link = e.currentTarget.dataset.link
      wx.navigateTo({
        url: link
      })
    }
  }
})
