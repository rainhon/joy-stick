// pages/controller.js
let controlWidth, controlHeight

Page({
  data: {
    x: 0,
    y: 0,
  },
  onReady: function () {
    let _this = this
    console.log(this)
    wx.createSelectorQuery().
    select('.control-area').boundingClientRect(function(res){
      controlWidth = res.width
      controlHeight = res.height
      _this.setData({
        x: controlWidth/2,
        y: controlHeight/2
      })
    }).exec()
    // let controlAreaWidth=
  },

  resetController: function(){
    console.log(this)
    this.setData({
      x: controlWidth/2,
      y: controlHeight/2
    })
  }
})