// src/component/custom/ability-card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    skillItem:{
      type: Object,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showCardMore: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _showCardMore(){
      this.setData({
        showCardMore: !this.data.showCardMore
      })
    },
  }
})
