var comm = require('../../utils/common.js');
var app = getApp();
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    phoneOption:null,
    sessionId:'',
    showBtn:false,
    phone:'',
    tokenPhone:'',
    code:'',
    time:'获取验证码',
    currentTime:60,
    disabled:false,
    confirmDisabled:true,
    interval:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sessionId: options.sessionId,
      tokenPhone: options.tokenPhone
    })
  },
  //获取用户手机号码(闲置)
  getPhoneNumber: function (e) {
    // console.log(e)
    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '未授权',
        success: function (res) {
        }
      })
    } else {
      var that =this;
      wx.login({
        success: res => {
          that.setData({
            phoneOption: e
          });
          var phoneOption = this.data.phoneOption;
          var postData = {
            sessionId: encodeURIComponent(this.data.sessionId),
            iv: encodeURIComponent(phoneOption.detail.iv),
            encryptedData: encodeURIComponent(phoneOption.detail.encryptedData),
          }
          comm.getData('/truckHouseByWx/getWxResPhone', postData, 'post').then(function (res) {
            if (res.data.result == true) {
              // that.setData({
              //   showBtn:false,
              //   phone:res.data.data,
              // })
            }else{
              // that.setData({
              //   showBtn: false,
              // })
            }
            
          })
        }
      })

    }

  },
  getPhone(e){
    let value = this.validateNumber(e.detail.value)
    console.log(value)
    this.setData({
      phone: value,
    })
  },
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  getCodeNum(e){
    var val = e.detail.value;
    var phone = this.data.phone;
    if (val !== '' && phone!=='') {
      this.setData({
        code: val,
        confirmDisabled: false,
      });
    } else {
      this.setData({
        confirmDisabled: true,
      });
    }
  },
  getcode(){
    console.log('获取验证码')
    var that = this;
    var phone = that.data.phone;
    if (phone == '') {
      wx.showToast({
        title: '手机号不能为空！',
        icon: 'none',
        duration: 2000
      })
      return false;
    } 
    
    var phoneReg = /^1[3456789]\d{9}$/;
    if (!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号码格式不正确，请重新输入！',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    // 倒计时开始
    var that = this;
    var currentTime = that.data.currentTime;
    that.setData({
      disabled: true,
      time: currentTime + '秒'
    })
    that.data.interval = setInterval(function () {
      that.setData({
        time: (currentTime - 1) + '秒'
      })
      currentTime -- ;
      if (currentTime <= 0) {
        clearInterval(that.data.interval)
        that.setData({
          time: '重新获取',
          currentTime: 60,
          disabled: false
        })
      }
    }, 1000)
// 倒计时结束
    var postData={
      token: that.data.tokenPhone,
      phone:that.data.phone
    }
    comm.getData('/truckHouseByWx/sendCodeByLogin', postData, 'post').then(function (res) {
      if(res.data.result == true){
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      }else{
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      }
     
    })
  },
  confirm(){
    console.log('确认登录')
    var that = this;
    var phone = that.data.phone;
    if (phone == '') {
      wx.showToast({
        title: '手机号不能为空！',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    var phoneReg = /^1[3456789]\d{9}$/;
    if (!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号码格式不正确，请重新输入！',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    var code = that.data.code;
    if(code == ''){
      wx.showToast({
        title: '手机验证码不能为空！',
        icon: 'none',
        duration: 2000
      })
      return false;
    } 
    var postData = {
      token: that.data.tokenPhone,
      phone: that.data.phone,
      code:that.data.code,
    }
    comm.getData('/truckHouseByWx/checkCodeByLogin', postData, 'post').then(function (res) {
      if (res.data.result == true) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
        wx.setStorageSync('token', res.data.data)
        app.isMebFlag();
      }else{
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      }

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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this;
    // 页面卸载清除定时器
    clearInterval(that.data.interval);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    var timeOut = setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 2000)
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