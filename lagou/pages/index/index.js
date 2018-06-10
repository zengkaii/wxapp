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
  },
  navigateTap:function(e){
    var index=e.currentTarget.dataset.index;
    var detail=this.data.job[index];
    app.globalData.detail=detail;
    console.log(app.globalData.detail)
    this.setData({
      detail:detail
    })
    // console.log(de)
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})

