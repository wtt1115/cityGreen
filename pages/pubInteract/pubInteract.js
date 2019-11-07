// pages/pub_Interact/pub_Interact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgChangeList:[],
    addImg: '../../images/pubInteractImg/pubInteractOne.png',
    positionSvg: '../../images/pubInteractImg/position.png',
    arrowRightSvg: '../../images/pubInteractImg/arrowRight.png',
    deleteSvg: '../../images/pubInteractImg/delete.png',
    choosePosition: '所在位置',
    textValue:''
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
  /*
    业务方法
  */
  addImgChange: function () {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      count: 9,
      success: res => {
        var imgSize = res.tempFiles[0].size;
        // 图片小于2M,图片数组长度限制9张
        res.tempFilePaths.forEach((value) => {
          that.data.imgChangeList.push({ images: value, deleteStatus: false }); 
        })
        that.setData({
          imgChangeList: that.data.imgChangeList
        })
      }
    })
  },
  showHandle: function(e) {
    var imgChangeList = this.data.imgChangeList;
    imgChangeList.forEach((value, index) => {
      if (index == e.currentTarget.id) {
        if (value.deleteStatus == true) {
          value.deleteStatus = false;
        } else if (value.deleteStatus == false) {
          value.deleteStatus = true;
        }
      }
    })
    this.setData({
      imgChangeList: imgChangeList
    })
  },
  deleteChange: function (e) {
    var imgChangeList = this.data.imgChangeList;
    imgChangeList.forEach((value, index) => {
      if (index == e.currentTarget.id) {
        imgChangeList.splice(index, 1)
      }
    })
    this.setData({
      imgChangeList: imgChangeList
    })
  },
  positionChange: function () {
    var that = this;
    wx.chooseLocation({
      success(res) {
        that.setData({
          choosePosition: res.name
        })
      },
      fail(res) {
        that.setData({
          choosePosition: '所在位置'
        })
      }
    })
  },
  bindFormSubmit: function (e) {
    var textValue = e.detail.value.textarea;
    console.log(textValue);
    console.log(this.data.choosePosition);
    var imgChangeList = [];
    this.data.imgChangeList.forEach((value, index) => {
      imgChangeList.push(value.images)
    })
    console.log(imgChangeList);
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