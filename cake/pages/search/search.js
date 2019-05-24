// pages/search/search.js
const utils=require('../../utils/util.js');
const app = getApp();
var searchArray=[];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    keynumber: 0,//检测搜索框是否有内容
    inpfocus:true,
    hiddenName:false,
    listerr:[],
    show:true,
  },
  searText:function(e){
    if(e.detail.cursor!=0){
      this.setData({
        disabled:false,
        keynumber:1,
      })
    }else{
      this.setData({
        disabled:true,
        keynumber:0,
      })
    }
  },
  searchKey:function(e){
    console.log(1)
     this.setData({
       hiddenName:true,
       show:false,
     })
    console.log(e)
    // 获取关键词
    var key=e.detail.value.key;
    console.log(key);
      if(this.data.keynumber==1){
       //  var that=this;
         let That = this;
        //把获取的input值插入数组里面
        let arr = this.data.listerr;
        console.log(arr)
        // let arr=this.detail.listerr;
        console.log(arr)
        if(this.data.key==""){
          var arrnum=arr.indexOf(key);
          if(arrnum!=-1){
            // 删除已存在后重新插入至数组
            arr.splice(arrnum,1)
            arr.unshift(key);
          }else{
            arr.unshift(key);
          }
        } else {
          console.log(123465);
          var arrNum=arr.indexOf(key);
          if(arrNum!=-1){
            arr.splice(arrNum,1);
            arr.unshift(key);
          }else{
            arr.unshift(key);
          }
         }
         console.log(arr);
         wx.setStorage({
           key: 'list_arr',
           data: arr,
         })
         wx.getStorage({
           key: 'list_arr',
           success: function(res) {
             console.log(res.data);
             That.setData({
               listerr:res.data
             })
             console.log(That.listerr);
           },
         })
         this.setData({
           key:''
         })
      }else{
        console.log("取消");
      }
    var url ="http://127.0.0.1:3200/searchList?key="+key;
    console.log(url);
    wx.request({
      url: url,
      data:{key:key},
      header:{},
      method:"GET",
      success:(res)=>{
        if(key==""){
          wx.showToast({
            title: '搜索内容不能为空',
            icon:none,
            duration:3000,
          })
        }else{
          console.log(res.data.data);
          this.setData({
            list: res.data.data,
          });
        }
      }
    })
  },
  // 清除搜索记录
  deletetext:function(){
    // 清除当前数据
    this.setData({
      listerr: [],
    });
    // 清除缓存数据
    wx.removeStorage({
      key: 'list_arr',
    })
  },
  todetail:function(e){
    var that=this;
    console.log(e);
  },
  todetail:function(e){
    var that=this;
    console.log(e);
    wx.navigateTo({
      url: "/pages/product/product"
      // ({url:"../detail/detail?lid="+goods})
    })
  },
  getvalue:function(e){
    console.log(e);
    var hiskey=e.currentTarget.dataset.text;
    this.setData({
      key:hiskey,
      disabled:false,
      keynumber:1,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView:(options.showView == "true" ? true :false)
    var That=this;
    wx.setNavigationBarTitle({
      title: '搜索',
    })
    // 读取缓存历史搜索记录
    wx.getStorage({
      key: 'list_arr',
      success: function(res) {
        // console.log(res.data)
        That.setData({
          listerr:res.data,
        })
      },
    })
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