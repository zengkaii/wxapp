// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {

    status:true,
    inputsearch:'',
    job:[],
    newSearch:[],
    history:[],
    like:["前端","java","后端","高级","佳得乐","深圳"]
  },

  search:function(e){
    var that =this;
    var sear =this.data.inputsearch;
    var jobs=this.data.job;
    var input = new RegExp(sear);
    var temp = [];

    this.data.history.unshift(sear);
    wx.setStorage({
      key: 'history',
      data: that.data.history,
      success: function(res){
        // success
        that.setData({
          history:that.data.history,
          status:true
        })
        console.log(res.data);
      },
    })
   
    if(sear == ''){
      wx.showToast({
        title: '请输入要搜索信息',
        icon:"none",
        duration: 1000
      });
     
    }else{
      for(let i =0;i<jobs.length;i++){

        if(input.test(jobs[i].job) || input.test(jobs[i].company) || input.test(jobs[i].address)){
          
          temp.push(jobs[i]);
        var detail=temp;
        app.globalData.details=detail;
        }

      } 
      if(temp ==''){
         wx.showToast({
        title: '暂无此信息',
        icon:"none",
        duration: 1000
      });
      }else if(temp){
        wx.navigateTo({
          url:'../about/about'
        })
      }
    }
    this.setData({

      newSearch:temp,
    })

  },
  gethistory:function(){
    
  },
  inputSearchTap:function(e){
      let inputsearch =e.detail.value;
      this.setData({
        inputsearch
      })
  },
  cancelTap(){
    wx.navigateBack({
      delta:1
    })
  },
  historySearch:function(e){
    // var that =this;
    var index=e.currentTarget.dataset.index;
    var detail=this.data.history[index];
    var input = new RegExp(detail);
    console.log(detail);
    var temp = [];
    // // var details=thi
    var jobs=this.data.job;
    console.log(jobs);

    for(let i =0;i<jobs.length;i++){
    if(input.test(jobs[i].job) || input.test(jobs[i].company) || input.test(jobs[i].address)){
      temp.push(jobs[i]);
        var details=temp;
        app.globalData.details=details;
      }
     
    }
    

    if(temp ==''){
      wx.showToast({
     title: '暂无此信息',
     icon:"none",
     duration: 1000
   });
   }else if(temp){
     wx.navigateTo({
       url:'../about/about'
     })
    }
  },
  likeSearch(e){
    var index=e.currentTarget.dataset.index;
    var detail=this.data.like[index];
    var input = new RegExp(detail);
    console.log(detail);
    var temp = [];
    // // var details=thi
    var jobs=this.data.job;
    // for(let i =0;i<jobs.length;i++){  
    //     // detail.push(jobs[i]);
    //   var details=detail;
    //   app.globalData.details=details;
      
    // }
    for(let i =0;i<jobs.length;i++){
    if(input.test(jobs[i].job) || input.test(jobs[i].company) || input.test(jobs[i].address)){
      temp.push(jobs[i]);
        var details=temp;
        app.globalData.details=details;
      }
    }

    if(temp ==''){
      wx.showToast({
     title: '暂无此信息',
     icon:"none",
     duration: 1000
   });
   }else if(temp){
     wx.navigateTo({
       url:'../about/about'
     })
    }
  },

  deleteHistory(){
    var that=this;
    const status=this.data.status;
    wx.showModal({
     
      content:'确定删除全部搜索历史？',
      confirmText:'全部删除',
      success:function(res){
        if(res.confirm){ 
          wx.removeStorage({
            key: 'history',
            success: function(r){
              that.setData({
                status:false,

                history:[]
              })
            },
          })
        console.log(status);
        }else if(res.cancel)
        {
          that.setData({
          
              status:true
          })
        } 
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    wx.getStorage({
      key: 'history',
      success: function(res){
        // success
        that.setData({
          history:res.data,
          // sear_his:res.data
        })
        if(that.data.history.length==0){
          that.setData({
            status:false
           
          });
        }else{
          that.setData({
            status:true
          })
         }
      },
      fail: function(res) {
        // fail
        console.log(res+'aaaaa')
      }
    });

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
    });
    
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