// pages/orderDetails/orderDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsInfo: {
      imgUrls: [
        '../../images/banner_icon.png',
        '../../images/banner_icon.png',
        '../../images/banner_icon.png',
        '../../images/banner_icon.png'
      ],
      price: 2988,
      describe: '无土栽培设备阳台种菜神器无土栽培蔬菜水培水耕种植架管道种菜机'
    },
    indicatorDots: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    currentTab: 0,
    shopDetailsImgs: [
      '../../images/banner_icon.png',
      '../../images/banner_icon.png',
      '../../images/banner_icon.png'
    ],
    serConImgs: [
      '../../images/banner_icon.png',
      '../../images/banner_icon.png'
    ],
    dishesSelectList: [
      {
        id: 1,
        images: '../../images/banner_icon.png',
        title: '自己阳台种的青菜1',
        describe: '有的青菜大概30斤左右，可以菜品互换，也可以零售（100/斤），仅限附近3公里交换，有需要的朋友请联系我，谢谢！',
        chooseStatus: 'false'
      },
      {
        id: 2,
        images: '../../images/banner_icon.png',
        title: '自己阳台种的青菜2',
        describe: '有的青菜大概30斤左右，可以菜品互换，也可以零售（100/斤），仅限附近3公里交换，有需要的朋友请联系我，谢谢！',
        chooseStatus: 'false'
      },
      {
        id: 3,
        images: '../../images/banner_icon.png',
        title: '自己阳台种的青菜3',
        describe: '有的青菜大概30斤左右，可以菜品互换，也可以零售（100/斤），仅限附近3公里交换，有需要的朋友请联系我，谢谢！',
        chooseStatus: 'false'
      }
    ]
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
  // 业务方法
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  activeNav: function (e) {
    var dishesSelectList = this.data.dishesSelectList;
    for (var i = 0; i < dishesSelectList.length; i++) {
      if (dishesSelectList[i].id == e.currentTarget.id) {
        if (dishesSelectList[i].chooseStatus === 'true') {
          dishesSelectList[i].chooseStatus = 'false'
        } else if (dishesSelectList[i].chooseStatus === 'false') {
          dishesSelectList[i].chooseStatus = 'true'
        }
      }
    }
    this.setData({
      dishesSelectList: dishesSelectList
    })
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

  loadData: function () {
    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000)
  },
  /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    // this.setData({
    //   //重置数据
    // });
    this.loadData();//下拉重新加载数据
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