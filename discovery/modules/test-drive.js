// es6 模块化语法 module
// js变量或者常量，它的值的类型由值决定
// var a=1;
// a="str"
// let b=123;
const testDrive = () => {
    // 用内置的来自微信的api了
    // 原生的api 大部分的小程序是html5 webview
    // webview nativeview
    // wx 
    // 性能上比原生的慢一些
    wx.showToast({
        title:'暂不支持'
    })
}

export default testDrive