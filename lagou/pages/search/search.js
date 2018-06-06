// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:false,
    history:[
      {
        list:'前端工程师'
      },
      {
        list:'前端工程师'
      },
      {
        list:'前端'
      },
      {
        list:'前端工程师'
      },
      {
        list:'前端工程师'
      },
      {
        list:'前端工程师'
      }
    ],
    like:[
      {
        ls:'数据挖掘'
      },
      {
        ls:'高级测试工程师'
      },
      {
        ls:'产品运营'
      },
      {
        ls:'英语'
      },
      {
        ls:'汽车'
      },
      {
        ls:'教育'
      }
    ]
  },
  cancelTap(){
    wx.navigateBack({
      delta:1
    })
  },
  deleteHistory(){
    var that=this;
    const status=this.data.status;
    wx.showModal({
     
      content:'确定删除全部搜索历史？',
      confirmText:'全部删除',
      success:function(res){
        if(res.confirm){
          that.setData({
              status:true,
                
          })
        console.log(typeof(status));
        }else if(res.cancel)
        {
          that.setData({
              status:false
          })
        } 
      }
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