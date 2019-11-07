// pages/invitation/invitation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backgroundImg: '../../images/invitationImg/backgroundOne.png',
    shareImg: '../../images/invitationImg/share.png',
    qrCodeImg: '../../images/invitationImg/QR_code.png'
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
     *转发分享
     */
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      // console.log(ops)
    }
    var that = this;
    //小程序线上环境分享成功后回调里函数不回调（官方调整）点击分享按钮就给分享数量+1
    return {
      title: '邀请好友，赢好礼赚积分！',
      path: '/pages/default/default', //邀请链接进入登录注册页面 参数到对应页面options接收 
      imageUrl: '',
      success: function (res) {
        // 转发成功
        // console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        // console.log("转发失败:" + JSON.stringify(res));
      }
    }

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