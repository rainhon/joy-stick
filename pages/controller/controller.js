// pages/controller.js
Page({
  data: {
    x: 0,
    y: 0,
    stickWidth: '10rpx',
    stickHeight: '10rpx',
    areaWidth: 0,
    areaHeight: 0,
  },
  onReady: function () {
    wx.createSelectorQuery().
    select('.control-area').boundingClientRect((res)=>{
      let width = res.width
      let height = res.height
      this.setData({
        x: width/2,
        y: height/2,
        areaWidth:width,
        areaHeight:height,
      })
      // console.log(this.x)
    }).exec()
    // let controlAreaWidth=
  },

  resetController: function(){
    this.setData({
      x: this.data.areaWidth/2,
      y: this.data.areaHeight/2
    })
  }
})