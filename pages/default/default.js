
var comm = require('../../utils/common.js');
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 有参数的时候分 扫码带参数进入 点击链接带参数进入
    if (JSON.stringify(options) !== "{}"){
       //扫描微信小程序二维码进入小程序
      if (options.scene) {
        let scene = decodeURIComponent(options.scene);
        //&是我们定义的参数链接方式
        let userId = options.scene.split("&")[0];
        let recommendId = options.scene.split('&')[1];
        // //扫码获取到推荐用户参数保存到缓存
        wx.setStorageSync('recommendId', recommendId);
        wx.setStorageSync('userId', userId);
      }else{
        wx.setStorageSync('recommendcode', options.recommendcode);
        wx.setStorageSync('recommenduserId', options.recommenduserId);
      }
     
    }
   
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    //微信登录
    app.login();
  },

//解密登录
  bindGetUserInfo: function (e) {
    // console.log(e)
  if (e.detail.errMsg == 'getUserInfo:ok'){
    wx.login({
      success: res => {
        wx.getUserInfo({
          success: res1 => {
            console.log(res1)
            // var userinfo = e.detail.userInfo
            var that =this;
            var postData={
              code: res.code,
              encryptedData: encodeURIComponent(res1.encryptedData),
              iv: encodeURIComponent(res1.iv),
            }
            comm.getData('/truckHouseByWx/loginByDecrypt',postData,'post').then(function (res) {
                console.log(res.data.data)
                if(res.data.result == true){
                  wx.setStorageSync('token', res.data.data);
                  app.isMebFlag();
                }else{
                  if (res.data.retcode = -1 && res.data.data !== '' && res.data.data !== null) {
                    wx.redirectTo({
                        url: "/pages/register/register?sessionId=" + res.data.ext1 + '&tokenPhone=' + res.data.data
                      })
                  }else{
                    wx.showToast({
                      title: res.data.msg,
                      icon: 'none',
                      duration: 2000
                    })
                  }
                }
            })
          }
        })
      }
    })
  }else{
    wx.showModal({
      title: '警告',
      content: '您点击了拒绝授权,将无法正常登录小程序,点击确定重新获取授权。',
      success: function (res) {
        if (res.confirm) {
          wx.openSetting({
            success: (res) => {
              console.log('授权成功')
            }
          })
        }
      }
    })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
})