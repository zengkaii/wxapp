// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  exit(){
    wx.showModal({
      title: '确认退出账号？',
      success: function(res) {
        if (res.confirm) {
          wx.navigateTo({
            url:'../login/login'
          })
          console.log('用户点击确定')
        } else if (res.cancel) {
          // return ;
          console.log('用户点击取消')
        }
      }
    })
  },
  tiptap(){
    wx.showToast({
      title: '该功能尚未开放',
      icon: 'none',
      duration: 2000
    })
  },
  toChart(){

  
  },
  postJobtap(){
    wx.showModal({
      showCancel:false,
      confirmText:'知道啦',
      content:'去应用商店下载拉勾APP\n即可发布职位'
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