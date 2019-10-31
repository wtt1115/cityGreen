// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/myImg/userImg.jpg',
      '../../images/myImg/aPackage.png',
      '../../images/myImg/userImg.jpg',
      '../../images/myImg/userImg.jpg',
      '../../images/myImg/aPackage.png'
    ],

    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    defuColor: '#baf4ec',
    actiColor: '#01d6c1',
    setMeal:[
      {
        setMealImg: '../../images/myImg/aPackage.png',
        setMealType: 'A',
        setMealAmount: '1688'
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
      }
    ],
    currentTab: 0,
    swiperTabList:['全部','宣传类','种菜类','做菜类','营业类']
  },

  swiperChange(e) {
    const that = this;
    that.setData({
    swiperIndex: e.detail.current,
    })
  },
  //滑动切换
  swiperTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },

  //点击切换
  clickTab: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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