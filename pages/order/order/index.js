const app = getApp();
import Dialog from '../../../src/component/zan-ui/dialog/dialog';
  
Page({

  data: {

  },

  toOrderDetail(){
    app.toPage('order-detail')
  },
  cancleOrder(){
    Dialog.alert({
      showCancelButton: true,
      confirmButtonText: '确定',
      title: '确定要取消该订单吗？',
      message: ' '
    }).then(() => {
      // on close
      console.log(1)
    }).catch(() => {
      console.log(2)
      // on cancel
    });
  },
})