// pages/integralDetails/integralDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integralNum: 6005,
    manyIntegralNum: 12026,
    integralList:[
      {
        title: '首次签到',
        time: '2018-11-07',
        number: '+100'
      },
      {
        title: '连续签到2天',
        time: '2018-11-07',
        number: '+100'
      },
      {
        title: '连续签到10天',
        time: '2018-11-07',
        number: '+100'
      },
      {
        title: '首次签到',
        time: '2018-11-07',
        number: '+100'
      },
      {
        title: '连续签到2天',
        time: '2018-11-07',
        number: '+100'
      },
      {
        title: '连续签到10天',
        time: '2018-11-07',
        number: '+100'
      },
      {
        title: '连续签到20天',
        time: '2018-11-07',
        number: '+100'
      },
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