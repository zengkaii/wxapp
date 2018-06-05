//app.js
App({
  onLaunch: function () {
   wx.getStorage({
     key:'user-info',
     success:(res)=>{

       console.log(res);
       this.globalData.userInfo = res.data;
     
     }
   })
  },
  globalData: {
    userInfo: null
  }
})