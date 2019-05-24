// pages/updaddr/updaddr.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: "",
    id:"",
    // userName:"",
    // tel:"",
    // regions:"",
    // addr:"",
    list:{},
  },
  bindRegionChange: function (e) {
    // console.log(e);
    let value = e.detail.value;
    // let value=this.data.regions
    this.setData({
      region: value,
    })
  },
  getaddr: function (e) {
    var id = this.data.id;
    var url = "http://127.0.0.1:3200/getaddr?id=" + id;
    wx.request({
      url: url,
      method: "GET",
      success: (res) => {
        console.log(res.data)
        var name=res.data[0].userName;
        console.log(name);
        var tel=res.data[0].tel;
        var province=res.data[0].province;
        var city=res.data[0].city;
        var district = res.data[0].district;
        var addr=res.data[0].addr;
        var orgins=province+","+city+","+district;
        // console.log(res.data[0])
        this.setData({
          list:res.data[0]
        })
      }
    })

  },
  updaddr:function(e){
    var id=this.data.id;
    console.log(e);
    var username = e.detail.value.userName;
    var tel = e.detail.value.tel;
    var regions = e.detail.value.regions;
    regions=regions.split(",");
    var province=regions[0];
    var city=regions[1];
    var district=regions[2];
    var addr = e.detail.value.addr;
    console.log(tel,username,province,city,district,addr);
    var url =`http://127.0.0.1:3200/updaddr?userName=${username}&tel=${tel}&province=${province}&city=${city}&district=${district}&addr=${addr}&id=${id}`;
    console.log(url);
    var tels = /^1[3-8]\d{9}$/;
    console.log(tel)
    if (!tels.test(tel)) {
      wx.showToast({
        title: '手机号格式不正确',
        size: 16,
        icon: "none",
        duration: 2000,
      })
    }else if(userId === null) {
      wx.showToast({
        title: '请先登录',
        icon: "none",
      })
    } else {
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
          } else {
            wx.navigateTo({
              url: '/pages/address/address',
            })
          }
        }
      })
    }
  },
  deladdr:function(){
    var id=this.data.id;
    var url="http://127.0.0.1:3200/deladdr?id="+id;
    wx.request({
      url: url,
      method:"GET",
      success:(res)=>{
        if(res.data.code==1){
          wx.navigateTo({
            url: '/pages/address/address',
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    // this.updaddr();
    this.getaddr();
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