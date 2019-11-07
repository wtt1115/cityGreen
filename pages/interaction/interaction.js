// pages/interaction/interaction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInput:false,
    inputVal:'',
    top:'',
    sendcolor:false,//发送按钮颜色
    commandArraylist: [
      {
        showBtn: false,
        userUrl: '../../images/myImg/userImg.jpg',
        username: 'A善手教育咨询胡老师',
        time: '7分钟前',
        praiseFlag: false,
        lovePointUser: '稻草人,玩笑而,加推你好啊,万众杀戮空间,是街坊邻居',
        imgUrlLst: ['../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png'],
        commandUserList: [
          {
            name: 'zero',
            text: '厉害'
          },
          {
            name: '华仔',
            text: '不错'
          },
          {
            name: '方知',
            text: 'hello'
          },
          {
            name: '吴氏生飞 地产老猫',
            text: '好产品'
          },
        ]
      },
      {
        showBtn: false,
        userUrl: '../../images/myImg/userImg.jpg',
        username: 'A善手教育咨询胡老师',
        time: '7分钟前',
        praiseFlag: false,
        lovePointUser: '稻草人,玩笑而,加推你好啊,万众杀戮空间,是街坊邻居',
        imgUrlLst: ['../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png'],
        commandUserList: [
          {
            name: 'zero',
            text: '厉害'
          },
          {
            name: '华仔',
            text: '不错'
          },
          {
            name: '方知',
            text: 'hello'
          },
          {
            name: '吴氏生飞 地产老猫',
            text: '好产品'
          },
        ]
      },
       {
        showBtn: false,
        userUrl: '../../images/myImg/userImg.jpg',
        username: 'A善手教育咨询胡老师',
        time: '7分钟前',
        praiseFlag: false,
        lovePointUser: '稻草人,玩笑而,加推你好啊,万众杀戮空间,是街坊邻居',
        imgUrlLst: ['../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png'],
        commandUserList: [
          {
            name: 'zero',
            text: '厉害'
          },
          {
            name: '华仔',
            text: '不错'
          },
          {
            name: '方知',
            text: 'hello'
          },
          {
            name: '吴氏生飞 地产老猫',
            text: '好产品'
          },
        ]
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
  operating(e){
    // console.log(e.currentTarget.dataset.bindex);
    var index = e.currentTarget.dataset.bindex;
    if (this.data.commandArraylist[index].showBtn){
      this.data.commandArraylist[index].showBtn= false;
    }else{
      this.data.commandArraylist[index].showBtn = true;
    }
    // console.log(this.data.commandArraylist); 
    this.setData({
      commandArraylist: this.data.commandArraylist
    })
  },
  //点赞+1
  like(){
    console.log('点赞+1');
  },
  //评价
  discuss(e){
    var index = e.currentTarget.dataset.bindex;
    console.log(e)
    var top =e.detail.x;//获取键盘高度定位
    console.log(top)
    if (this.data.commandArraylist[index].showBtn) {
      this.data.commandArraylist[index].showBtn = false;
    } else {
      this.data.commandArraylist[index].showBtn = true;
    }
    this.setData({
      top: top+'px',
      showInput: true,
      commandArraylist: this.data.commandArraylist
    })
  },
  //输入
  bindinput(e){
    console.log(e.detail.value);
    if (e.detail.value.length>0){
      this.setData({
        inputVal: e.detail.value,
        sendcolor:true
      });
    }else{
      this.setData({
        sendcolor: false
      });
    }
   
  },
  send(){
    var inputVal = this.data.inputVal;
    console.log(inputVal);
    this.setData({
      showInput: false
    })
  },
  inputBlur(){
    console.log(11111)
    this.setData({
      showInput: false,
      top: '-200px'
    })
  },
  // 去发布
  toadd(){
    wx.navigateTo({
      url: '/pages/pubInteract/pubInteract',
    })
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