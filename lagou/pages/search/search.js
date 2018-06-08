// pages/search/search.js

Page({

  /**
   * 页面的初始数据
   */

  data: {
    status:false,
    inputsearch:'',
    job:[],
    history:[
      {
        list:'前端工程师'
      },
      {
        list:'前端'
      },
      {
        list:'字节跳动'
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
  search:function(){
    let sea=[];
    for(let i=0;i<this.data.job.length;i++){
      let searchinput= new RegExp(this.data.inputsearch);
      if(searchinput.test(this.data.job[i].company || this.data.job[i].job || this.data.job[i].address)){
        sea.push(this.data.job[i]);
      }else{
        console.log('111111')
      }

    }
    this.setData({
       job:sea
      

    })
    // console.log(this.data.job);
    // console.log(job)
  },
  inputSearchTap:function(e){
      // if(e.detail.value===this.data.job)
      // {
        
      // }
      // console.log(this.data.job)
    // let list=[];
    // // let his=[];
    // his=this.data.history
    // this.setData({
    //   list: e.detail.value,
    //   history:his.push(list)
    // }) ;
    if(e.detail.value==='前端'){
      wx.navigateTo({
        url: '../about/about',
      })
    }
    // console.log('1111');
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
          // wx.removeStorageSync('history')
          that.setData({
              status:true,
              history:[]
             
                
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
    wx.request({
      url:'https://www.easy-mock.com/mock/5b15fb5b9ab69517fa2acb43/lagou/lagou#!method=get',
      success:(res)=>{
        this.setData({
          job:res.data.data.jobs
        });
        
      }
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