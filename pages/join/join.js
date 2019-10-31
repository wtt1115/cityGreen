// pages/join/join.js
var comm = require('../../utils/common.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: true,
    recommendCode: '',
    recommendUserId: '',
    phonenumber:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    //参数可以是点击分享链接参数 或者 朋友圈扫码带参数进入
    if (JSON.stringify(options) !== "{}") {
      this.setData({
        recommendCode: options.recommendcode,
        recommendUserId: options.recommenduserId,
        phonenumber: options.recommendcode.slice(0, 3) + "****" + options.recommendcode.slice(-4),
        type: false,
      })
    }

  },
  inputCode(e) {
    // console.log(e.detail.value);
    let value = this.validateNumber(e.detail.value)
    console.log(value)
    this.setData({
      recommendCode: value,
    })
  },
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  jion() {
    var that = this;
    if (this.data.type == true) {
      var recommendCode = this.data.recommendCode
      if (recommendCode != '' && recommendCode.length != 11) {
        wx.showToast({
          title: '推荐码(手机号码)必须是11位阿拉伯数字！',
          icon: 'none',
          duration: 2000
        })
        return false;
      }
      var postData = {
        token: wx.getStorageSync('token'),
        recommendCode: this.data.recommendCode,
      }
    } else {
      var postData = {
        token: wx.getStorageSync('token'),
        recommendCode: this.data.recommendCode,
        recommendUserId: this.data.recommendUserId
      }
    }
    comm.getData('/truckHouseByWx/addTruckHouseToMeb', postData, 'post').then(function(res) {
      console.log(res)
      if (res.data.result == true) {
        wx.redirectTo({
          url: "/pages/myIndex/myIndex"
        })
      } else {
        if (res.data.retcode == -1) {
          wx.showModal({
            title: '温馨提示',
            showCancel: false,
            content: '登录超时,请重新登录！',
            success: function(res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.redirectTo({
                  url: "/pages/default/default"
                })
              }

            }
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    var timeOut = setTimeout(function() {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})