// pages/profile/profile.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list:[
      { id: 1, img_url: "http://127.0.0.1:3200/img/profile/payment.png", title: "待付款", url: "/pages/logs/logs" },
      { id: 2, img_url: "http://127.0.0.1:3200/img/profile/shipments.png", title: "待发货", url: "/pages/logs/logs" },
      { id: 3, img_url: "http://127.0.0.1:3200/img/profile/takeGoods.png", title: "待收货", url: "/pages/logs/logs" },
      { id: 4, img_url: "http://127.0.0.1:3200/img/profile/evaluate.png", title: "待评价", url: "/pages/logs/logs" },
      { id: 5, img_url: "http://127.0.0.1:3200/img/profile/refund.png", title: "退款维权", url: "/pages/logs/logs" },
    ],
    list2:[
      { id: 1, img_url: "http://127.0.0.1:3200/img/profile/cart.png", title: "购物车", url: "/pages/logs/logs" },
      { id: 2, img_url: "http://127.0.0.1:3200/img/profile/evaluate.png", title: "任务中心", url: "/pages/logs/logs" },
      { id: 3, img_url: "http://127.0.0.1:3200/img/profile/money.png", title: "返现", url: "/pages/logs/logs" },
      { id: 4, img_url: "http://127.0.0.1:3200/img/profile/shop.png", title: "赠品", url: "/pages/logs/logs" },
      { id: 5, img_url: "http://127.0.0.1:3200/img/profile/site.png", title: "收货地址", url: "/pages/address/address" },
      { id: 6, img_url: "http://127.0.0.1:3200/img/profile/profile.png", title: "个人信息", url: "/pages/logs/logs" },
      { id: 7, img_url: "http://127.0.0.1:3200/img/profile/anumber.png", title: "账号设置", url: "/pages/logs/logs" },
    ],
  },
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  loginshow:function(){
    // console.log(123);
  },
  getUserInfo:function(){
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    // console.log(app.globalData.userInfo);
    var name=app.globalData.userInfo.nickName;
    var photo=app.globalData.userInfo.avatarUrl;
    var gender=app.globalData.userInfo.gender;
    // console.log(name,photo,gender);
    var url=`http://127.0.0.1:3200/insuser?name=${name}&photo=${photo}&gender=${gender}`;
    wx.request({
      url: url,
      method:"GET",
      success:(res)=>{
        // console.log(res.data[0].id);
        app.globalData.userId=res.data[0].id;
        // console.log(app.globalData.userId);
      }
    })
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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