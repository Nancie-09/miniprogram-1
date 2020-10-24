//index.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  // 页面初始数据
  data: {
      // banner 初始化
      banner_url: fileData.getBannerData(),
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 4000,
      duration: 2000,
      // nav 初始化
      navTopItems: fileData.getIndexNavData(),
      navSectionItems: fileData.getIndexNavSectionData(),
      curNavId: 1,
		  curIndex: 0
  },
   
  onLoad:function(){
    var that = this
    that.setData({
      list: that.data.navSectionItems
    })
  },

  //选项卡
  switchTab: function(e) {
      let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
      this.curIndex = parseInt(e.currentTarget.dataset.index)
      console.log(e)
      var that = this
      this.setData({
        curNavId: id,
        curIndex: index,
      })
      
  },
  // detail
  navigateDetail: function(e){
    wx.navigateTo({
      url:'../detail/detail?artype=' + e.currentTarget.dataset.artype
    })
  },
  
  // book
  bookTap: function(e){
    wx.navigateTo({
      url:'../book/book?aid='+e.currentTarget.dataset.aid
    })
  }
  
})
