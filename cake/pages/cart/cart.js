// pages/cart/cart.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },
  searchcart:function(){
    console.log(app.globalData.userId);
    var uid=app.globalData.userId;
    var url="http://127.0.0.1:3200/searcart?userId="+uid;
    wx.request({
      url: url,
      method:"GET",
      success:(res)=>{
        console.log(res.data);
        this.setData({
          list:res.data
        })
        console.log(this.data.list);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.searchcart();
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
    this.searchcart();
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