

const app = getApp()

/* 获取区域列表 */
export function getAddressRegion(callBack) {
  app.request({
    url: '/mobile/region/queryAll',
    success(){
      console.log(3)
    },
    complete(res){
      if(res.data && res.data.code == 200){
        console.log(1)
      }else{
        console.log(2)
      }
      callBack(res.data)
    }
  })
}