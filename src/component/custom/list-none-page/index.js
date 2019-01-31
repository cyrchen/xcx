// src/component/custom/list-none-page/index.js
Component({
  
	externalClasses: ['custom_container_class','custom_icon_class',],
  properties: {
    tipIcon: {
      type: String,
      value: ''
    },
    tipWord:{
      type: String,
      value: ''
    },
    butnText:{
      type: String,
      value: '去购买'
    },
    butnLink:{
      type: String,
      value: ''
    },
   
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _toLinkPage(){
      wx.navigateTo({
        url: this.data.butnLink
      })
    },
  }
})
