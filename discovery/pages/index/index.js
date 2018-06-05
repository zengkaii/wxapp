import testDrive from "../../modules/test-drive";
// console.log(testDrive);
//index.js
//获取应用实例
// 在page里得到app
const app = getApp()

Page({
  data: {
    slides: []
  },
  onLoad(){
    this.setData({
      slides:app.globalData.slides
    })
  },
  // testDrive:testDrive  key和value一样时可省
  testDrive,

  readMore(event) {
    const id=event.target.dataset.id;
    wx.navigateTo({
      url: `/pages/vehicles/vehicles?id=${id}`,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
