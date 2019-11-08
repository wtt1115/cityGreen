城市种菜
default register join app.js 关于登录
引入weUI框架


//请求示例
  var comm = require('../../utils/common.js');
   var postData = {
    //  请求参数
    
     }
     comm.getData('url', postData, 'post').then(function (res) {
      // console.log(res);
      if (res.data.result == true) {
          //数据获取成功
      } else {
        if (res.data.retcode == -1) {
          wx.showModal({
             title: '温馨提示',
             showCancel: false,
             content: '登录超时,请重新登录！',
             success: function (res) {
               if (res.confirm) {
                 // console.log('用户点击确定')
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