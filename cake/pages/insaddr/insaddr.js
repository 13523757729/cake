// pages/insaddr/insaddr.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    tel:"",
    region:"",
    addr:"",
    province:"",
    city:"",
    district:"",
  },
  bindRegionChange:function(e){
    // console.log(e);
    let value=e.detail.value;
    this.setData({
      region:value,
    })
  },
  getform:function(e){
    console.log(e);
    var tel=e.detail.value.tel;
    var userName=e.detail.value.userName;
    var addr=e.detail.value.addr;
    var region = e.detail.value.region;
    region=region.split(",");
    var province=region[0];
    var city=region[1];
    var district=region[2];
    console.log(province,city,district)
    this.setData({
      userName:userName,
      tel:tel,
      province:province,
      city:city,
      district:district,
      addr:addr
    });
    // console.log(this.data.userName);
    var userId=app.globalData.userId;
    console.log(userId);
    var url=`http://127.0.0.1:3200/Inseaddr?userName=${this.data.userName}&tel=${this.data.tel}`;
    url+=`&province=${this.data.province}&city=${this.data.city}&district=${this.data.district}&addr=${this.data.addr}&userId=${userId}`;
    // console.log(url);
    var tel = /^1[3-8]\d{9}$/;
    if (!tel.test(this.data.tel)) {
      wx.showToast({
        title: '手机号格式不正确',
        size: 16,
        icon: "none",
        duration: 2000,
      })
    }
    else if (userId == null) {
      wx.showToast({
        title: '请先登录',
        icon: "none",
      })
    } else{
      wx.request({
        url: url,
        method: "GET",
        success: (res) => {
          console.log(userId)
          if (res.data.code == -1) {
              wx.showToast({
                title: `${res.data.msg}不能为空`,
                size: 16,
                icon: "none",
                duration: 2000,
              })
            }else{
              wx.navigateTo({
                url: '/pages/address/address',
              })
          }
        }
      })
    }
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