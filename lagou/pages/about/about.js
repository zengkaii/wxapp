//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    job:[]
  },

  onReady:function(){
    this.setData({
      job:app.globalData.details
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
  },
})

