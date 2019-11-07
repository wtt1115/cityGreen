// pages/signIn/signIn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integralNum: 75,
    signDay: 20,
    year: 0,
    month:0,
    week: ['一', '二', '三', '四', '五', '六', '日'],
    dayList: [],
    weekIndex:0,
    distance: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timehandle();
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
  gointegralDetails: function() {
    wx.navigateTo({
      url: '../integralDetails/integralDetails'
    })
  },
  timehandle: function() {
    var date = new Date();
    // 获取年月
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    this.setData({
      year: year,
      month: month
    })
    // 获取每个月的天数生成数组
    var monthDaySize;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      monthDaySize = 31;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      monthDaySize = 30;
    } else if (month == 2) {
      // 计算是否是闰年,如果是二月份则是29天
      if ((year - 2000) % 4 == 0) {
        monthDaySize = 29;
      } else {
        monthDaySize = 28;
      }
    };
    var daySize = new Array(monthDaySize);
    var dayArray = []
    for (var i = 0; i < daySize.length; i++) {
      var weekValue = this.getWeekDayNextMonth(i+1);
      dayArray.push({ dayHao: i + 1, week: weekValue})
    }
    this.setData({
      dayList: dayArray
    })
    var weekIndex = this.data.dayList[0].week
    if (weekIndex == 0) {
      this.setData({ weekIndex: 0 })
    } else if (weekIndex == 1) {
      this.setData({ weekIndex: 1 })
    } else if (weekIndex == 2) {
      this.setData({ weekIndex: 2 })
    } else if (weekIndex == 3) {
      this.setData({ weekIndex: 3 })
    } else if (weekIndex == 4) {
      this.setData({ weekIndex: 4 })
    } else if (weekIndex == 5) {
      this.setData({ weekIndex: 5 })
    } else if (weekIndex == 6) {
      this.setData({ weekIndex: 6 })
    }
  },
  // 根据日期获取对应的星期
  getWeekDayNextMonth: function(n) {
    return new Date(this.data.year, this.data.month - 1, n).getDay()
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