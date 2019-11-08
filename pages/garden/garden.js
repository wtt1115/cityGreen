// pages/garden/garden.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    tabs: ["全部", "发布", "成交"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    
    showInput: false,
    inputVal: '',
    top: '',
    sendcolor: false,//发送按钮颜色
    //社区列表
    dataList: [
      {
        status:'1',
        title:'自己阳台种的青菜',
        uploader:'王珊珊',
        time:'2019.06.22',
        phone:'18578651610',
        address:'宝钢小区',
        content: '有的青菜大概30斤左右，可以菜品互换，也可以零售（100/斤），仅限附近3公里交换，有需要的朋友请联系我，谢谢！',
        showBtn:false,
        resource: ['http://img2.imgtn.bdimg.com/it/u=2118739199,3378602431&fm=27&gp=0.jpg',
            'http://img0.imgtn.bdimg.com/it/u=2277942808,1417432970&fm=27&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=1504812505,3480403568&fm=27&gp=0.jpg',
            'http://img4.imgtn.bdimg.com/it/u=3456219059,4251129897&fm=27&gp=0.jpg',
            'http://img3.imgtn.bdimg.com/it/u=3912316188,1981132393&fm=27&gp=0.jpg'
          ],
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
        status: '0',
        title: '自己阳台种的青菜',
        uploader: '王珊珊',
        time: '2019.06.22',
        phone: '18578651610',
        address: '宝钢小区',
        content: '有的青菜大概30斤左右，可以菜品互换，也可以零售（100/斤），仅限附近3公里交换，有需要的朋友请联系我，谢谢！',
        showBtn: false,
        resource: ['http://img2.imgtn.bdimg.com/it/u=2118739199,3378602431&fm=27&gp=0.jpg',
          'http://img0.imgtn.bdimg.com/it/u=2277942808,1417432970&fm=27&gp=0.jpg',
          'http://img5.imgtn.bdimg.com/it/u=1504812505,3480403568&fm=27&gp=0.jpg',
          'http://img4.imgtn.bdimg.com/it/u=3456219059,4251129897&fm=27&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=3912316188,1981132393&fm=27&gp=0.jpg'
        ],
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
  operating(e) {
    // console.log(e.currentTarget.dataset.bindex);
    var index = e.currentTarget.dataset.bindex;
    if (this.data.dataList[index].showBtn) {
      this.data.dataList[index].showBtn = false;
    } else {
      this.data.dataList[index].showBtn = true;
    }
    // console.log(this.data.dataList); 
    this.setData({
      dataList: this.data.dataList
    })
  },
  //点赞+1
  like(e) {
    console.log('点赞+1');
    var index = e.currentTarget.dataset.bindex;
    if (this.data.dataList[index].showBtn) {
      this.data.dataList[index].showBtn = false;
    } else {
      this.data.dataList[index].showBtn = true;
    }
    this.setData({
      showInput: true,
      dataList: this.data.dataList
    })
  },
  //评价
  discuss(e) {
    var index = e.currentTarget.dataset.bindex;
    console.log(e)
    var top = e.detail.x;//获取键盘高度定位
    console.log(top)
    if (this.data. dataList[index].showBtn) {
      this.data. dataList[index].showBtn = false;
    } else {
      this.data. dataList[index].showBtn = true;
    }
    this.setData({
      top: top + 'px',
      showInput: true,
       dataList: this.data. dataList
    })
  },
  //输入
  bindinput(e) {
    console.log(e.detail.value);
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
      showInput: false,
      top: '-200px'
    })
  },
  // 去发布
  toadd() {
    wx.navigateTo({
      url: "/pages/vegeIssue/vegeIssue",
    })
  },
  loadData: function () {
    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000)
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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
  }
});
