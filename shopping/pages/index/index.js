//index.js
//获取应用实例
import goods from '../../api/goods';

const app = getApp()

Page({
  data: {
    num: 1,
    show: false,
    totalNum: 0,
    scaleCart: false,
    goods: null,
    nav1:true,
    nav2:false,
    nav3:false
  },
  
  onLoad (options) {
    console.log(goods); 
    const id = options.id || 2;
    console.log(id);
    let curGoods;
    for(let i = 0; i< goods.length; i++) {
      console.log(i)
      if (goods[i].id === id) {
        curGoods = goods[i];
        break;
      }
    }
    console.log(curGoods);
    setTimeout(() => {
      this.setData({
        goods: curGoods
      });
    }, 1000)
  },

  switchTab () {

  },
  addCount() {
    let num = ++this.data.num;
    // num++
    this.setData({
      num
    })
  },
  addToCart() {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(() => {
      this.setData({
        show: false,
        scaleCart: true
      });
      setTimeout(() => {
        this.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      },200)
    }, 300)
  },
  navSelect1(){
    this.setData({
      nav1:true,
      nav2:false,
      nav3:false
    })
  },
  navSelect2(){
    this.setData({
      nav1:false,
      nav2:true,
      nav3:false
    })
  },
  navSelect3(){
    this.setData({
      nav1:false,
      nav2:false,
      nav3:true
    })
  }
})
