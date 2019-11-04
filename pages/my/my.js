// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usrerInfo:{
      userImg:'../../images/myImg/userImg.jpg',
      name:'胡珊珊',
      expirationTime:'2020.1.20',
    },
    setMealList:[
      {
        setMealImg:'../../images/myImg/aPackage.png',
        setMealType:'A',
        setMealAmount:'1688'
      },
      {
        setMealImg: '../../images/myImg/bPackage.png',
        setMealType: 'B',
        setMealAmount: '2688'
      },
      {
        setMealImg: '../../images/myImg/cPackage.png',
        setMealType: 'C',
        setMealAmount: '3688'
      },
      {
        setMealImg: '../../images/myImg/dPackage.png',
        setMealType: 'D',
        setMealAmount: '4688'
      }
    ],
    menuList:[
      {
        menuImg: '../../images/myImg/myCaiping.png',
        menuName: '我的菜品',
      }, {
        menuImg: '../../images/myImg/my_integral.png',
        menuName: '我的积分',
      }, {
        menuImg: '../../images/myImg/myMessage.png',
        menuName: '我的信息',
      }, {
        menuImg: '../../images/myImg/invite.png',
        menuName: '邀请有礼',
      }, {
        menuImg: '../../images/myImg/remindService.png',
        menuName: '提醒服务',
      }, {
        menuImg: '../../images/myImg/reservationService .png',
        menuName: '预约服务',
      }, {
        menuImg: '../../images/myImg/replaceService.png',
        menuName: '更换服务',
      }, {
        menuImg: '../../images/myImg/contactUs.png',
        menuName: '联系我们',
      }, {
        menuImg: '../../images/myImg/feedbackCenter.png',
        menuName: '反馈中心',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  
  loadData: function () {
    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000)
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