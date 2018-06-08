//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    job:[]
  },

  onReady:function(){
    wx.request({
      url:'https://www.easy-mock.com/mock/5b15fb5b9ab69517fa2acb43/lagou/lagou#!method=get',
      success:(res)=>{
        this.setData({
          job:res.data.data.jobs
        });
        
      }
    })
  }
})

