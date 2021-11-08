//测试接口，查看是否能够通信
exports.route = {
  //通过GET方法获取参数
  async get() {
      let result={};
      result.time=new Date().toLocaleString();
      result.yourParams=this.params;
      
      return result;
  },
  async post() {
    let result={};
    result.time=new Date().toLocaleString();
    result.yourParams=this.params;
    
    return result;
}
};