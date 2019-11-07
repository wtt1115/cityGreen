// pages/garden/garden.js
Page({
  data: {
    textValue: ''
  },
  onLoad: function () {

  },
  bindFormSubmit: function (e) {
    var textValue = e.detail.value.textarea;
    this.setData({
      textValue: textValue
    })
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
  }
});
