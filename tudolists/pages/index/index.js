//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据 对应着 界面状态
  data: {
    // 默认的status是 1全部 
    // setData 2未完成 3已完成
    status: 1,
    addForm : true,
    lists: [{
      title:'帮徐加元同学砍价',
      time:'十分钟前',
      status: '1'
    },
    {
      title:'邀请柔柔同学看电影',
      time:'刚刚',
      status: '0'
    }],

    addText:''
  },
  curList:[],
  // 事件处理函数
  showStatus: function(e){
    // 文字? 
    const status = e.currentTarget.dataset.status; //你点击的那个元素
    // console.log(e,status);
    // 不再是DOM编程 针对界面状态的编程
    this.setData({
      status: status
    })
    // const temp = this.data.lists;
    // console.log(temp);
  },
  addTodoShow: function(e){
    this.setData({
      addForm: false
    })
  },
  // 如何添加新的todo ，页面上多一条任务
  // 显示多少条是由lists决定
  // lists数组 push
  // 核心 数据驱动界面 数据变 界面自动更新
  // MVVM Model（数据模型data）  View VM（视图模型层）
  addTodo:function(e){
    //输入框的内容
    const task = {
       title: this.data.addText,
       time: '刚刚',
       status: '0'
    }
    const temp = [...this.data.lists,task]; //添加一个数据项
    this.setData({
      lists: temp,
      addForm:true
    })
  },
  addTodoHide:function(e){
    this.setData({
      addForm: true
    })
  },
  setInput: function(e){
    // console.log(e.detail.value);
    this.setData({
      addText: e.detail.value  //获取到输入的数据
    })
  },
  changeTodo: function(e){
    console.log(e);
    // console.log(e.currentTarget.dataset.item);
    const index = e.currentTarget.dataset.item;
    const temp = this.data.lists;
    temp.forEach((item,i) => {    //每一项的值和下标
      //  console.log(item,i);
      if(i==index){
        if(item.status == '0'){
          item.status = '1'
          wx.showToast({
            title:'已完成任务',
            icon:'success',
            duration:1000
          })
        }else{
          item.status = '0'
          wx.showToast({
            title:'任务打回重做',
            icon:'success',
            duration:1000
          })
        }
      }
    })
    // console.log(temp)
    this.setData({
      lists:temp
    })
    // 当前点击条目的status 变为 sucess
    // 数据 lists 跟当前条目相关的这一条数据将status的值更新为 1
    // index ？
  },
  
})
