var app = getApp();
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    imgUrls: [
      '../../images/myImg/userImg.jpg',
      '../../images/myImg/aPackage.png',
      '../../images/myImg/userImg.jpg',
      '../../images/myImg/userImg.jpg',
      '../../images/myImg/aPackage.png'
    ],
    packageData: [
      {
        text: 'A套餐',
        price: '1688/年',
        iconUrl: '../../images/myImg/package1.png'
      },
      {
        text: 'B套餐',
        price: '1688/年',
        iconUrl: '../../images/myImg/package2.png'
      },
      {
        text: 'C套餐',
        price: '1688/年',
        iconUrl: '../../images/myImg/package3.png'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    defuColor: '#baf4ec',
    actiColor: '#01d6c1',
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [{ //假数据
      img: "avatar.png",
      name: "欢顔",
      tag: "知名情感博主",
      answer: 134,
      listen: 2234
    }]
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
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  footerTap: app.footerTap,
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  }
})