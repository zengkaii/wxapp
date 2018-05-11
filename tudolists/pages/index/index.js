//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据 对应着 界面状态
  data: {
    // 默认的status是1全部
    // setData可以改变界面的状态，2 已完成
    // 3 已完成
    status:1,
    // 界面状态，全部要被data接管起来
    addShow:true
  },
  showStatus:function(e){
    const status = e.currentTarget.dataset.status;
    console.log(e,status);
    // 不再是dom编程，现在是针对界面状态的编程
    this.setData({
      status:status
    })
  },
  addTodoShow:function(e){
    this.setData({
      addShow:false
    })
  },
  addTodo:function(e){

  },
  addTodoHide:function(e){
    this.setData({
      addShow:true
    })
  }
  //事件处理函数

})
