// pages/vegeDetails/vegeDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addImg: '../../images/pubInteractImg/pubInteractOne.png',
    addVideo: '../../images/pubInteractImg/videoImg.png',
    deleteSvg: '../../images/pubInteractImg/delete.png',
    detailsInfo: {},
    title: '',
    contacts: '',
    address: '',
    describe: '',
    videoSrc: '',
    imgChangeList: [],
    selectIndex: 1,
    vedioShow: false,
    imgShow: true,
    videoShow: false
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
  selectFn: function (e) {
    let selectIndex = Number(e.currentTarget.dataset.selectindex);
    this.setData({
      selectIndex: selectIndex
    })
    if (this.data.selectIndex === 0) {
      this.setData({
        vedioShow: true,
        imgChangeList: []
      })
    } else if (this.data.selectIndex === 1){
      this.setData({
        vedioShow: false,
        videoSrc:''
      })
    }
  },
  // 添加视频
  addVideoChange: function () {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        that.setData({
          videoSrc: res.tempFilePath
        })
      }
    })
  },
  showHandle2: function () {
    this.setData({
      videoShow: true
    })
  },
  deleteChange2: function () {
    this.setData({
      videoSrc: '',
      videoShow: false
    })
  },
  // 添加图片
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
  showHandle: function (e) {
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
    var imgsArray = this.data.imgChangeList;
    imgsArray.forEach((value, index) => {
      if (index == e.currentTarget.id) {
        imgsArray.splice(index, 1)
      }
    })
    this.setData({
      imgChangeList: imgsArray
    })
  },
  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  contactsInput: function (e) {
    this.setData({
      contacts: e.detail.value
    })
  },
  addressInput: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  describeInput: function (e) {
    this.setData({
      describe: e.detail.value
    })
  },
  bindFormSubmit: function () {
    var imgChangeList = this.data.imgChangeList;
    var imgsArray = [];
    if (imgChangeList.length > 0) {
      imgChangeList.forEach((value) => {
        imgsArray.push(value.images)
      })
    }
    var detailsInfo = {}
    if (this.data.title) {
      detailsInfo.title = this.data.title;
    }
    if (this.data.contacts) {
      detailsInfo.contacts = this.data.contacts;
    }
    if (this.data.address) {
      detailsInfo.address = this.data.address;
    }
    if (this.data.describe) {
      detailsInfo.describe = this.data.describe;
    }
    if (this.data.videoSrc) {
      detailsInfo.videoSrc = this.data.videoSrc;
    }
    if (imgChangeList.length > 0) {
      detailsInfo.imgChangeList = imgsArray;
    }
    this.setData({
      detailsInfo: detailsInfo
    })
    console.log(this.data.detailsInfo)
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