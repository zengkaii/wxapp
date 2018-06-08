// pages/leaderboard/leaderboard.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      leaderboard:[],

  },
  ToBoardTap(){
    wx.showModal({
      content:'你不是招聘官哦,\n只有招聘官才能加入排行榜~',
      showCancel:false
    })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url:'https://www.easy-mock.com/mock/5b15fb5b9ab69517fa2acb43/lagou/lagou#!method=get',
      success:(res)=>{
        this.setData({
          leaderboard:res.data.data.jobs
        });
        // console.log(res.data.data.jobs)
      }
    })
  },
  navigateTap:function(e){
    var index=e.currentTarget.dataset.index;
    var detail=this.data.leaderboard[index];
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})