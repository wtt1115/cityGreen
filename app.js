//app.js
var comm = require('./utils/common.js')
App({
  globalData: {

  },
  onLaunch: function (options) {
   
  },
  onShow: function (options) {

  },
  login: function () {
      var that = this
      wx.login({
        success: res => {
          comm.getData('/truckHouseByWx/login?code='+ res.code).then(function (res) {
            if (res.data.result==true) {
              //登录成功保存token到缓存
              wx.setStorageSync('token', res.data.data)
              that.isMebFlag();
            } else{
                return false;
            } 
          });
        }
      })
  },
  //判断是否是卡车之家会员
  isMebFlag:function(){
    var postData = {
      token: wx.getStorageSync('token'),
    }
   
      comm.getData('/truckHouseByWx/isTruckHouseMeb', postData, 'post').then(function (res) {
      if (res.data.result == true) {
        if (res.data.data.isMebFlag == true) {
          wx.redirectTo({
            url: '/pages/myIndex/myIndex',
          })
        } else {
          var recommendcode = wx.getStorageSync('recommendcode');
          var recommenduserId = wx.getStorageSync('recommenduserId');
          // 扫码获取参数
          var userId = wx.getStorageSync(' userId');
          var recommendId = wx.getStorageSync(' recommendId');

          //  wx.showModal({
          //   title: '温馨提示',
          //   showCancel: false,
          //   content: recommendcode + recommenduserId,
          //   success: function (res) {
          //     if (res.confirm) {
          //       console.log('用户点击确定')
          //     }
          //   }
          // })
          //点击分享链接非会员带参数进入
          if (recommendcode !== '' && recommenduserId !==''){
            wx.redirectTo({
              url: '/pages/join/join?recommendcode='+recommendcode +'&recommenduserId='+recommenduserId,
            })
          } 
          //扫码带参数进入
          else if(userId !== '' && recommendId !== ''){
            wx.redirectTo({
            url: '/pages/join/join?recommendcode=' + recommendId + '&recommenduserId=' + userId,
            })
          }
          else{
            wx.redirectTo({
              url: '/pages/join/join', //不是卡车之家会员跳转到带输入框加入页面
            })
          } 
        }
      } else {
        if (res.data.retcode == -1) {
          wx.showModal({
            title: '温馨提示',
            showCancel: false,
            content: res.data.msg,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.navigateTo({
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
    }) 
  },
  // 点击页面跳转之后不能再点击跳转
  doubleClick: function (flag) {
    var that = this;
    that.globalData.doubleClick = flag;
    console.log(that.globalData.doubleClick)
  },
})