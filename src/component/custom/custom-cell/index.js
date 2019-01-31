// pages/comPage/component/partial/text-link/text-link.js
Component({
	
	externalClasses: ['custom_container_class','custom_icon_class',],
  /**
   * 组件的属性列表
   */
  properties: {
    borderType:{ //top bottom 
      type: String,
      value: ''
    },
    linkUrl:{
      type: String,
      value: ''
    },
    // 左边
    title: {  
      type: String,
      value: '标题'
    },
    titleFontSize: {
      type: Number,
      value: 30
    },
    icon: {
      type: String,
      value: ''
    },



    // 右边
    hasRight:{
      type: Boolean,
      value: true
    },
    subTitle: {
      type: String,
      value: ''
    },
    subTitleFontSize: {
      type: Number,
      value: 28
    },
    hasRightIcon:{
      type: Boolean,
      value: true
    }
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
    _tolinkUrl(e) {
      let linkUrl = e.currentTarget.dataset.link
      if (!linkUrl) {
        return
      }
      wx.navigateTo({
        url: linkUrl,
      })
    }
  }
})