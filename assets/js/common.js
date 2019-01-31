
export function echoErr(errMessage) {
    wx.showToast({
        icon: 'none',
        title: errMessage,
        duration: 2000
    })
}

export function jsonToStr(json, encode) {
    var returnParam = ""
    var str = [];
    if (!encode) {
        for (let p in json) {
            str.push(p + "=" + json[p]);
        }
    } else {
        for (let p in json) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
        }
    }
    returnParam += str.join("&")
    return returnParam
}

export function previewImagefunction (url, urls) {
    if (!url) {
        return
    }
    if (!urls) {
        urls = []
        urls.push(url)
    }
    wx.previewImage({
        current: url, // 当前显示图片的http链接
        urls: urls // 需要预览的图片http链接列表
    })
}

export function randNum(minnum, maxnum) {
    return Math.floor(minnum + Math.random() * (maxnum - minnum));
}

export function Trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}


export function toPageByRouter(page,params){
    const strParam = params? '?'+jsonToStr(params):""
    let pageURL = { url: pageRouter[page] + strParam }
    console.log(pageURL)
    if(tabPage.indexOf(page) != -1){
        wx.switchTab(pageURL)
    }else if(pages.indexOf(page) != -1){
        wx.navigateTo(pageURL)
    }else{
        echoErr('路由异常')
    }
}
export function redirectToPageByRouter(page,params){
    const strParam = params? '?'+jsonToStr(params):""
    let pageURL = { url: pageRouter[page] + strParam }
    console.log(pageURL)
    if(pages.indexOf(page) != -1){
        wx.redirectTo(pageURL)
    }else{
        echoErr('路由异常')
    }
}



const tabPage = ["main", "mine"]
const pages = [
    "box-logistics-from",
    "box-userinfo-from",
    "scan-code",
    "bind-success",
    "box-userinfo",
    "box",
    "abouts-protocol-service",
    "address",
    "address-edit",
    "logistics",
    "report-datas-unscramble",
    "report-datas",
    "authorization",
    "pre-order",
    "index",
    "order-detail",
    "pay-result",
    "contact",
    "order",
    "discount",
    "report",
    "report-detail",
    "abouts-protocol",
    "good-detail",
    "swiper-list-page",
    "test"
]

const pageRouter = {
    "box-logistics-from":"/pages/box/box-logistics-from/index",
    "box-userinfo-from": "/pages/box/box-userinfo-from/index",
    "scan-code": "/pages/box/scan-code/index",
    "bind-success": "/pages/box/bind-success/index",
    "box-userinfo": "/pages/box/box-userinfo/index",
    "box": "/pages/box/box/index",
    "abouts-protocol-service": "/pages/mine/abouts-protocol-service/index",
    "main": "/pages/main/main/index",
    "address": "/pages/mine/address/index",
    "address-edit": "/pages/mine/address-edit/index",
    "logistics": "/pages/order/logistics/index",
    "report-datas-unscramble": "/pages/report/report-datas-unscramble/index",
    "report-datas": "/pages/report/report-datas/index",
    "mine": "/pages/main/mine/index",
    "authorization": "/pages/main/authorization/index",
    "pre-order": "/pages/order/pre-order/index",
    "index": "/pages/main/index/index",
    "order-detail": "/pages/order/order-detail/index",
    "pay-result": "/pages/order/pay-result/index",
    "contact": "/pages/mine/contact/index",
    "order": "/pages/order/order/index",
    "discount": "/pages/mine/discount/index",
    "report": "/pages/report/report/index",
    "report-detail": "/pages/report/report-detail/index",
    "abouts-protocol": "/pages/mine/abouts-protocol/index",
    "good-detail": "/pages/order/good-detail/index",
    "swiper-list-page": "/pages/main/swiper-list-page/index",
    "test": "/pages/main/test/index"
}
