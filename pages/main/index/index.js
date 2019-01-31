const app =  getApp();

  
var countDownTimer;
Page({
    data: {
        countDown: 4
    },
    jumpToIndex(e){
        app.toPage('main')
    },
    /* 倒计时 */
    _countDown(count) {
        console.log(count)
        countDownTimer = setTimeout(() => {
            if (count < 1) {
                clearTimeout(countDownTimer)
                app.toPage('main')
            }
            else {
                --count;
                this.setData({
                    countDown: count
                }, () => {
                    this._countDown(count)
                })
            }
        }, 1000)
    },
    onLoad() {
        this._countDown(this.data.countDown)
    },
    /* 卸载当前页面 */
    onUnload() {
        clearTimeout(countDownTimer)
    },
})