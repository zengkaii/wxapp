//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    addShow: true,
    focus: true,
    addTodo: '',
    lists: []
  },
  onLoad() {
    // console.log(app.globalData.userInfo);
    if (app.globalData.userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: app.globalData.userInfo
      })
    }
  },
  getUserInfo(e) {
    console.log(e);
    this.setData({
      hasUserInfo: true,
      userInfo: e.detail.userInfo
    })
    // wx.setStorageSync('userName',this.data.userInfo.nickName);
    wx.setStorage({
      key: 'user-info',
      data: e.detail.userInfo,
      success: (res) => {
        console.log(res);
      }
    })
  },
  addTodoHide(e) {
    this.setData({
      addShow: false,
      focus: false,
      addText: ''
    })
  },
  addTodo(e) {
    // value
    if (!this.data.addText.trim()) {
      return
    }
    // item都是一个对象，文字只是一部分
    var addT = {
      title: this.data.addText,
      status: '0',
      id: new Date().getTime()
    }
    console.log(addT);
    const temp = [addT, ...this.data.lists];
    this.setData({
      lists: temp

    })
    wx.setStorage({
      key: 'lists',
      data: temp
    });
    wx.showToast({
      title: '添加',
      icon: 'success',
      duration: 1000
    })
    this.addTodoHide();
  },
  setInput(e) {
    this.setData({
      'addText': e.detail.value
    })
  }
})