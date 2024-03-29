var app = getApp();

var that
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    top: '',
    showInput: false,
    swiper_length: 0,
    height: 300,
    //轮播图
    imgUrls: [
      '../../images/banner_icon.png',
      '../../images/banner_icon.png',
      '../../images/banner_icon.png',
      '../../images/banner_icon.png',
      '../../images/banner_icon.png'
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
    }],
    //社区列表
    DataSource: [
        {
          showBtn: false,
          userUrl: '../../images/myImg/userImg.jpg',
        title: '一分钟了解阳台种菜一分钟了解阳台种菜一分钟了解阳台种菜一分钟了解阳台种菜',
          imgUrlLst: ['../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png'],
          zanSource: ['张三', '李四', '王五', '找钱', '孙俪', '王宝'],
          contnet: [{
            'firstname': '张三',
            'content': '你好漂亮呀！！'
          },
          {
            'firstname': '李四',
            'content': '纳尼！！'
          },

          ],
        },
        {
          showBtn: false,
          userUrl: '../../images/myImg/userImg.jpg',
          title: '一分钟了解阳台种菜一分钟了解阳台种菜一分钟了解阳台种菜一分钟了解阳台种菜',
          imgUrlLst: ['../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png'],
          zanSource: ['张三', '李四', '王五', '找钱', '孙俪', '王宝'],
          contnet: [{
            'firstname': '张三',
            'content': '你好漂亮呀！！'
          },
          {
            'firstname': '李四',
            'content': '纳尼！！'
          },

          ],
        },
        {
          showBtn: false,
          userUrl: '../../images/myImg/userImg.jpg',
          username: 'A善手教育咨询胡老师',
          time: '7分钟前',
          praiseFlag: false,
          lovePointUser: '稻草人,玩笑而,加推你好啊,万众杀戮空间,是街坊邻居',
          imgUrlLst: ['../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png', '../../images/banner_icon.png'],
          zanSource: ['张三', '李四', '王五', '找钱', '孙俪', '王宝'],
          contnet: [{
            'firstname': '张三',
            'content': '你好漂亮呀！！'
          },
          {
            'firstname': '李四',
            'content': '纳尼！！'
          },

          ],
        }
      ],
    photoWidth: wx.getSystemInfoSync().windowWidth / 5,

    popTop: 0, //弹出点赞评论框的位置
    popWidth: 0, //弹出框宽度
    isShow: true, //判断是否显示弹出框
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
    that = this;
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
    //获取节点信息
    setTimeout(()=>{
      that.get_wxml(`.item-list`, (rects) => {
        that.setData({
          height: rects[that.data.currentTab].height
        })
        console.log(rects[0].height);
        console.log(this.data.currentTab);
      })
    },100)
  },
  loadData: function () {
    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000)
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
  },
  // 点击点赞的人
  TouchZanUser: function (e) {
    wx.showModal({
      title: e.currentTarget.dataset.name,
      showCancel: false
    })
  },

  // 删除朋友圈
  delete: function () {
    wx.showToast({
      title: '删除成功',
    })
  },

  // 点击了点赞评论
  TouchDiscuss: function (e) {
    // this.data.isShow = !this.data.isShow
    // 动画
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
      delay: 0,
    })
    if (that.data.isShow == false) {
      that.setData({
        popTop: e.target.offsetTop - (e.detail.y - e.target.offsetTop) / 2,
        popWidth: 0,
        isShow: true
      })

      // 0.3秒后滑动
      setTimeout(function () {
        animation.width(0).opacity(1).step()
        that.setData({
          animation: animation.export(),
        })
      }, 100)
    } else {
      // 0.3秒后滑动
      setTimeout(function () {
        animation.width(120).opacity(1).step()
        that.setData({
          animation: animation.export(),
        })
      }, 100)

      that.setData({
        popTop: e.target.offsetTop - (e.detail.y - e.target.offsetTop) / 2,
        popWidth: 0,
        isShow: false
      })
    }
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

  //获取节点
  get_wxml: function (className, callback) {
    wx.createSelectorQuery().selectAll(className).boundingClientRect(callback).exec()
  },
  onReady: function () {
    //获取节点信息
    that.get_wxml(`.item-list`, (rects) => {
      that.setData({
        height: rects[that.data.currentTab].height
      })
      console.log(rects[0].height);
      console.log(this.data.currentTab);
    })
  },
  //评价
  discuss(e) {
    var top = e.detail.x;//获取键盘高度定位
    console.log(top)
    this.setData({
      showInput: true,
      top: top + 'px',
    })
  },
  //输入
  bindinput(e) {
    if (e.detail.value.length > 0) {
      this.setData({
        inputVal: e.detail.value,
        sendcolor: true
      });
    } else {
      this.setData({
        sendcolor: false
      });
    }
  },
  send() {
    var inputVal = this.data.inputVal;
    console.log(inputVal);
    this.setData({
      showInput: false
    })
  },
  inputBlur() {
    console.log(11111)
    this.setData({
      showInput: false
    })
  }
})