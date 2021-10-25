const faceSearch=require('../aip_tools').faceSearch;
exports.route = {
  //通过POST方法获取参数
    async post() {
        let img=this.params.image;
        //默认BASE64编码
        let imgType="BASE64";
        let result=await faceSearch(img,imgType);        
        //数据库操作

        return result;
    }
};