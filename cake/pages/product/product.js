// pages/product/product.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cakelist:[],
  },
  addcart: function (e) {
    console.log(e);
    var id = e.target.dataset.item
    console.log(id);
    var uid = app.globalData.userId;
    console.log(uid);
    var url = `http://127.0.0.1:3200/getcart?id=${id}&userId=${uid}`;
    if (uid === null) {
      wx.showToast({
        title: '请登录',
        icon: 'none',
        duration: 2000,
      })
    } else {
      wx.request({
        url: url,
        method: "GET",
        success: (res) => {
          console.log(res.data);
          if (res.data.code == 1) {
            wx.showToast({
              title: '添加成功',
            })
          }
        }
      })
    }
  },
  todetails:function(e){
    var id=e.target.dataset.item;
    wx.navigateTo({
      url:"/pages/details/details?id="+id,
    })
  },
  cakeProduct:function(){
    var url="http://127.0.0.1:3200/getproducts";
    wx.request({
      url: url,
      method: 'GET',
      success:(res)=>{
        // console.log(res.data);
        this.setData({
          cakelist:res.data
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.cakeProduct();
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