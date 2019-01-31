

export function toLinkPage(page, type) {
  let router = {
    url: page
  }
  console.log(router)
  switch (type) {
    case 'redirectTo': {
      wx.redirectTo(router)
    }; break;
    case 'switchTab': {
      wx.switchTab(router)
    }; break;
    case 'reLaunch': {
      wx.switchTab(router)
    }; break;
    default:{
      wx.navigateTo(router)
    }
  }
}

/* export function formatParams(params){
  if(typeof params == 'undefined'){
    return ''
  }
}
 */
