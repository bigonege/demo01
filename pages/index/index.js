//index.js
//获取应用实例
Page({
  data: {
    focus: false,
    inputValue: '',
    imgUrls:[
      'http://img2.imgtn.bdimg.com/it/u=1946009481,1756887209&fm=26&gp=0.jpg',
      'https://gd2.alicdn.com/imgextra/i2/3477075384/O1CN01rImJ1K1pduxfnmVtR_!!3477075384.jpg',
'https://img.alicdn.com/imgextra/i3/4207517744/O1CN01XvqXcR274ncCzFWaq_!!0-item_pic.jpg_430x430q90.jpg'

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  },

  durationChange:function(e)
  {
    this.setData({
      duration: e.detail.value
    })
  },

  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },

  bindViewTap: function(){
    wx.navigateTo({
      url: '../camera/camera'
    })
  }

})
