// pages/controller.js
Page({
  data: {
    x: 0,
    y: 0,
    stickWidth: '20',
    stickHeight: '20',
    areaWidth: 0,
    areaHeight: 0,
  },
  onReady: function () {
    wx.createSelectorQuery().
    select('.control-area').boundingClientRect((res)=>{
      let width = res.width
      let height = res.height
      this.setData({
        x: width/2 - this.data.stickWidth/2,
        y: height/2 - this.data.stickHeight/2,
        areaWidth:width,
        areaHeight:height,
      })
    }).exec()
    // let controlAreaWidth=
  },

  resetController: function(){
    console.log(this.data.stickWidth/2 , this.data.stickHeight/2)
    this.setData({
      x: this.data.areaWidth/2 - this.data.stickWidth/2,
      y: this.data.areaHeight/2 - this.data.stickHeight/2
    })
  }
})