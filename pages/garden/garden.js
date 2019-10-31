// pages/garden/garden.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    tabs: ["全部", "发布", "成交"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    commandArraylist: [
      {
        userUrl: '../../images/myImg/userImg.jpg',
        username: 'A善手教育咨询胡老师',
        time: '7分钟前',
        praiseFlag: false,
        lovePointUser: '稻草人,玩笑而,加推你好啊,万众杀戮空间,是街坊邻居',
        imgUrlLst: ['../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png'],
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
        userUrl: '../../images/myImg/userImg.jpg',
        username: 'A善手教育咨询胡老师',
        time: '7分钟前',
        praiseFlag: false,
        lovePointUser: '稻草人,玩笑而,加推你好啊,万众杀戮空间,是街坊邻居',
        imgUrlLst: ['../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png'],
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
        userUrl: '../../images/myImg/userImg.jpg',
        username: 'A善手教育咨询胡老师',
        time: '7分钟前',
        praiseFlag: false,
        lovePointUser: '稻草人,玩笑而,加推你好啊,万众杀戮空间,是街坊邻居',
        imgUrlLst: ['../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png', '../../images/interaction/cont_img.png'],
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
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});