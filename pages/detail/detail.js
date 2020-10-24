var app = getApp()
Page( {
  data: {
  },
  onLoad: function (options) {
    this.setData({
      artype:options.artype
    })    
  },
  
  bookTap:function(){
    wx.navigateTo({
      url:'../book/book'
    })
  }
})