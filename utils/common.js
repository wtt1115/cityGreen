// var host = 'gdwsc.deepermobile.com' //测试环境
var host ='gdws.nsenz.com' //生产环境
var url = 'https://' + host
function getUrl() {
  return url
}
function getHost() {
  return host
}
function getData(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
  return doPromise(url, data, method, header, true)
}
function getData2(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
  return doPromise(url, data, method, header, false)
}

function doPromise(url, data, method, header, showLoading) {
  return new Promise(function (resolve, reject) {
    if (showLoading) {
        loading()
    }
    header.cookie = 'openid=' + wx.getStorageSync('openid')
    wx.request({
      url: getUrl() + encodeURI(url),
      data: data,
      method: method,
      header: header,
      success: function (res) {
        if (showLoading) {
          wx.hideLoading()
        }
        resolve(res)
      },
      fail: function (res) {
        wx.showToast({
          title: '网络异常，请稍候再试!',
          icon: 'none',
          duration: 2000
        })
      }
    })
  })
}
//查找元素在数组里面的索引值
function search(arr, dst) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == dst) {
      return i
    }
  }
  return false;
}

function loading() {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
}

// 数组随机洗牌
function shuffle(arr) {
  if (arr.length == 1) return arr;
  //正向思路
  //  for(let i = 0, n = arr.length; i < arr.length - 1; i++, n--) {
  //    let j = i + Math.floor(Math.random() * n);
  //逆向思路
  let i = arr.length;
  while (--i > 1) {
    //Math.floor 和 parseInt 和 >>>0 和 ~~ 效果一样都是取整
    let j = Math.floor(Math.random() * (i + 1));
    /*
    //原始写法
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    */
    //es6的写法
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = {
  getData: getData,
  getData2: getData2,
  getUrl: getUrl,
  getHost: getHost,
  loading: loading,
  search: search,
  shuffle: shuffle,
}