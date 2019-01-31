
const app = getApp();


export function setUser(callBack, count) {
  let user = app.globalData.user;
	if (!user) {
    wxLogin((user) => {
      app.baseUser.user = user;
      if (callBack) callBack(user)
    })
	} else {
		if (callBack) callBack(user)
	}
}

export function wxLogin(callBack) {
	wx.login({
		success: function(res) {
			if (res.code) {/* 
				console.log(res.code)
				return */
				wx.showLoading({
					mask: true,
					title: '登陆中',
				});
				//发起网络请求
				wx.request({
					url: app.baseRequest.baseUri+'/mobile/login/wxLogin',
					method: 'POST',
					data:  res.code	,
					header: {
    				authorization: app.baseRequest.authorization
					},
					success(res) {
						if (res.data.code == '200') {
							app.baseRequest.sKey = res.data.data;
							console.log(app.baseRequest.sKey)
							app.baseRequest.postHeader['sKey'] = res.data.data;
							app.baseRequest.header['sKey'] = res.data.data;
							callBack(res.data)
						} else {
							loginFail()
						}
					},
					fail(res) {
						loginFail()
					},
					complete(res) {
						wx.hideLoading()
					},
				})
				
			} else {
				loginFail()
			}
		}
	});
};

export function loginFail(callBack){
	wx.showModal({
		title: '提示',
		content: '登录失败，请重新登录',
		showCancel: false,
		confirmText: '重新登录',
		success: function (res) {
			if (res.confirm) {
				wxLogin(() => {
					wx.reLaunch({
						url: '/pages/index/index',
					})
				})
				
			}
		}
	})
};

export function reLogin(callBack){
	wx.showModal({
		title: '提示',
		content: '登录状态过期，请重新登录',
		showCancel:false,
		confirmText:'重新登录',
		success: function (res) {
			if (res.confirm) {
				wxLogin(()=>{
					wx.reLaunch({
						url: '/pages/index/index',
					})
				})
				
			}
		}
	})
};
