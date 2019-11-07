// pages/myDishes/myDishes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    ],
    windowHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowHeight = this.dynamicHeightChange();
    this.setData({
      windowHeight: windowHeight
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
/* 业务逻辑*/
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
  dynamicHeightChange: function () {
    var windowHeight;
    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        var rpxR = 750 / clientWidth;
        windowHeight = clientHeight * rpxR;
      }
    });
    return windowHeight;
  },
  bindSubmit: function () {
    console.log(22)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})