//app.js
// 应用启动 onLaunch
// App -> page
// 全局的，应用级别的一些行为
// 添加全局的数据
import db from './assets/db.js';
App({
  onLaunch: function () {
    Object.assign(this.globalData,db);
    // // ajax请求
    // wx.request({
    //   url: 'https://resources.ninghao.net/wxapp-case/db.json',
    //   // data: {},
    //   // method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // // header: {}, // 设置请求的 header
    //   success:(response)=>{
    //     // console.log(response);
    //     Object.assign(this.globalData,response.data)
    //     console.log(this.globalData);
    //     // success
    //   },
    //   fail: (error)=> {
    //     // console.log(error);
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })
  },
  globalData: {
      
    }
})