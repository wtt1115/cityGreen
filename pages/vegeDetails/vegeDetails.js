// pages/vegeDetails/vegeDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsInfo: {
      title: '阳台上种的蔬菜',
      contacts: '张先生',
      address: '长沙市中南大学',
      describe: '自家种的有机蔬菜，纯绿色产品',
      imgsArray: [
        '../../images/banner_icon.png',
        '../../images/banner_icon.png',
        '../../images/banner_icon.png',
        '../../images/banner_icon.png',
        '../../images/banner_icon.png',
        '../../images/banner_icon.png'
      ],
      videoSrc: ''
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