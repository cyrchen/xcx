let app =  getApp();
import {getAddressRegion} from "../../../src/api/address"
import Dialog from '../../../src/component/zan-ui/dialog/dialog';
  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressForm:{
      default: 0,
      name: '',
      phone: '',
      address: '',
      address_code: '',
    },
    showPop: false,
    areaList: null
  },

  changeAddressDefault(){
    this.setData({
      'addressForm.default': !this.data.addressForm.default
    })
  },

  /* 选择地址 */
  chooseArea(e) {
    this.setData({
      showPop: true
    })
  },
  onClosePop() {
    this.setData({
      showPop: false
    })
  },
  cancleArea(e) {
    this.setData({
      showPop: false
    })
  },
  confirmArea(e) {
    console.log('confirmArea', e)
    let checkedArea = e.detail
    return
    this.setData({
      'addressForm.provinceId': checkedArea.values[0].code,
      'addressForm.cityId': checkedArea.values[1].code,
      'addressForm.areaId': checkedArea.values[2].code,
      'addressForm.address': checkedArea.detail.province + checkedArea.detail.city + checkedArea.detail.county ,
      checkedArea: checkedArea,
      showPop: false
    })
  },


  deleteAddr(){
    Dialog.alert({
      showCancelButton: true,
      confirmButtonText: '删除',
      title: '确定要删除该地址吗？',
      message: ' '
    }).then(() => {
      // on close
      console.log(1)
    }).catch(() => {
      console.log(2)
      // on cancel
    });
  },


  onLoad(options){
    
    getAddressRegion((res)=>{
      if(res.code == 200){
        let areaList = {
          province_list: {}, 
          city_list: {},
          county_list: {}
        }
        res.data.map((item1)=>{
          areaList.province_list[item1.code] = item1.name
          item1.children.map((item2)=>{
            areaList.city_list[item2.code] = item2.name
            item2.children.map((item3) => {
              areaList.county_list[item3.code] = item3.name
            })
          })
        })
        console.log(areaList)
        this.setData({
          areaList: areaList
        })
      }
    })
    /* if(options.type == 1){
      let addr = JSON.parse(unescape(options.addr))
      this.setData({
        addressForm: addr,
        checkedArea:{
          detail: { code: addr.areaId}
        }
      })
    } */
  },

  getAddressAreaJson(callBack) {
    app.request({
      url: '/shop/address/list',
      method: 'get',
      complete(res) {
        callBack(res.data)
      }
    })
  },

})