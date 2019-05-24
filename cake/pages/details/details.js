// pages/details/details.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    list:[],
    pic:[],
  },
  addcart: function (e) {
    console.log(e);
    var id = e.target.dataset.list
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
  cakeDetails:function(){
    console.log(this.data.pic);
    console.log(this.data.list);
    var id=this.data.id;
    var url="http://127.0.0.1:3200/getdetails?id="+id;
    wx.request({
      url: url,
      method:"GET",
      success:(res)=>{
        var list=res.data.data;
        console.log(list);
        var pic=res.data.pic;
        console.log(pic);
        this.setData({
          pic: pic,
          list:list
        })
        console.log(this.data.pic);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id,
    })
    this.cakeDetails();
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