// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result : "",
    lastresult : "",
    lastOp : "",
    NumFlag : true,// NumFlag represents it if a number;
  },

  addNum : function(e){
    if(!this.data.NumFlag){
      this.setData({
        result : "",
        NumFlag : true,
      })
    }
    this.setData({
        result : parseFloat(this.data.result + e.currentTarget.dataset.num),
      })
  },
  multiply :function(e){
    if(this.data.NumFlag){//here it represents that the last is a number;
      var data = this.data.result
      var lastOp = this.data.lastOp
      var lastresult = this.data.lastresult
      switch(lastOp){
        case "+":data = data+lastresult;break;
        case "-":data = lastresult-data;break;
        case "*":data = data*lastresult;break;
        case "/":data = lastresult/data;break;
      }
      lastresult = data;
      lastOp = "*";
      this.setData({
        result :data,
        lastresult : lastresult,
        lastOp: lastOp,
        NumFlag : false,
      }
      )
    }
  },
  sub : function(e){
    if(this.data.NumFlag){
      var data = this.data.data
      var lastresult = this.data.lastresult
      var lastOp = this.data.lastOp
      switch(lastOp){
        case "+":data = data+lastresult;break;
        case "-":data = lastresult-data;break;
        case "*":data = data*lastresult;break;
        case "/":data = lastresult/data;break;
      }
      lastresult = data;
      lastOp = "-";
      this.setData({
        result : data,
        lastresult : lastresult,
        lastOp : lastOp,
        NumFlag : false
      })
    }
  },
  adder : function(e){
    if(this.data.NumFlag){
      var data = this.data.data
      var lastresult = this.data.lastresult
      var lastOp = this.data.lastOp
      switch(lastOp){
        case "+":data = data+lastresult;break;
        case "-":data = lastresult-data;break;
        case "*":data = data*lastresult;break;
        case "/":data = lastresult/data;break;
      }
      lastresult = data;
      lastOp = "+";
      this.setData({
        result : data,
        lastresult : lastresult,
        lastOp : lastOp,
        NumFlag : false
      })
    }
  },
  divide : function(e){
    if(this.data.NumFlag){
      var data = this.data.data
      var lastresult = this.data.lastresult
      var lastOp = this.data.lastOp
      switch(lastOp){
        case "+":data = data+lastresult;break;
        case "-":data = lastresult-data;break;
        case "*":data = data*lastresult;break;
        case "/":data = lastresult/data;break;
      }
      lastresult = data;
      lastOp = "/";
      this.setData({
        result : data,
        lastresult : lastresult,
        lastOp : lastOp,
        NumFlag : false
      })
    }
  },
  Result:function(e){
    if (this.data.NumFlag){
      var data = this.data.result 
      var lastOp = this.data.lastOp
      var lastResult = this.data.lastresult 
      switch(lastOp){
        case "+" : data = data + lastResult; break;
        case "-" : data = lastResult - data; break;
        case "*" : data = data * lastResult; break;
        case "/" : data = lastResult / data; break;
      }
      lastResult = data;
      lastOp = "=";
      this.setData({ 
        result : data,
        lastresult : lastResult, 
        lastOp:lastOp, 
        NumFlag : false
      })
      }
    },
    clear:function(e)
    {
      this.setData({
        result:"",
        lastResult:"",
        lastOp:"",
        NumFlag:true,
      })
    },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
