//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { id: 1, imgUrl: "http://127.0.0.1:3200/img/index/banner1.jpg" },
      { id: 1, imgUrl: "http://127.0.0.1:3200/img/index/banner2.jpg" },
      { id: 1, imgUrl: "http://127.0.0.1:3200/img/index/banner3.jpg" },
      ],
    list2:[
      { id: 1, imgurl: "http://127.0.0.1:3200/img/index/icon/girlcake.png", title: "女生蛋糕",url:"/pages/product/product" },
      { id: 2, imgurl: "http://127.0.0.1:3200/img/index/icon/boycake.png", title: "男生蛋糕",url:"/pages/product/product" },
      { id: 3, imgurl: "http://127.0.0.1:3200/img/index/icon/childrencake.png", title: "儿童蛋糕",url:"/pages/product/product" },
      { id: 4, imgurl: "http://127.0.0.1:3200/img/index/icon/fruitcake.png", title: "水果蛋糕",url:"/pages/product/product" },
      { id: 5, imgurl: "http://127.0.0.1:3200/img/index/icon/weddingcake.png", title: "婚礼蛋糕",url:"/pages/product/product" },
      { id: 6, imgurl: "http://127.0.0.1:3200/img/index/icon/afternoontea.png", title: "下午茶",url:"/pages/product/product" },
      { id: 7, imgurl: "http://127.0.0.1:3200/img/index/icon/flowercake.png", title: "献给TA",url:"/pages/product/product" },
      { id: 8, imgurl: "http://127.0.0.1:3200/img/index/icon/cakeother.png", title: "蛋糕配件",url:"/pages/product/product" },
    ],
    list3:[
      { id: 1, imgurl: "http://127.0.0.1:3200/img/index/cake1.jpg", title: "热卖产品", url: "/pages/product/product" },
      { id: 1, imgurl: "http://127.0.0.1:3200/img/index/cake2.jpg", title: "下午茶时光", url: "/pages/product/product" },
      { id: 1, imgurl:"http://127.0.0.1:3200/img/index/cake3.jpg",title:"当季水果蛋糕",url:"/pages/product/product"},
    ],
    list4:[],
  },
  addcart:function(e){
    console.log(e);
    var id=e.target.dataset.item
    console.log(id);
    var uid=app.globalData.userId;
    console.log(uid);
    var url=`http://127.0.0.1:3200/getcart?id=${id}&userId=${uid}`;
    if(uid===null){
      wx.showToast({
        title:'请登录',
        icon:'none',
        duration:2000,
      })
    }else{
      wx.request({
        url: url,
        method: "GET",
        success: (res) => {
          console.log(res.data);
          if(res.data.code==1){
            wx.showToast({
              title: '添加成功',
            })
          }
        }
      })
    }
  },
  cakeList:function(){
    var url ="http://127.0.0.1:3200/getindexList";
    wx.request({
      url: url,
      method: "GET",
      success: (res) => {
        this.setData({
          list4: res.data
        })
      },
    })
  },
  gosearch:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  todetails:function(e){
    console.log(e);
    var id=e.target.dataset.item
    console.log(id);
    wx.navigateTo({
      url: '/pages/details/details?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.cakeList();
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