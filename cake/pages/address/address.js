// pages/address/address.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {                 
    list:[],
    hidden:true,
  },
  updaddr:function(e){
    console.log(e)
    // console.log(this.data.list[0]);
    // console.log(e.currentTarget.dataset.index);
  //  console.log(index);
   var id= e.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/updaddr/updaddr?id='+id,
    })
  },
  inseaddr:function(){
    wx.navigateTo({
      url: '/pages/insaddr/insaddr',
    })
  },
  addrList:function(e){
    var userId=app.globalData.userId;
    var url="http://127.0.0.1:3200/getaddrList?userId="+userId;
    wx.request({
      url: url,
      method:"GET",
      success:(res)=>{
        if(userId!=null){
          this.setData({
            list: res.data
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.addrList();
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
    this.addrList();
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