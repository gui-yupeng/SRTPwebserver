const addUser=require('../../aip_tools').addUser;
exports.route = {
  //通过POST方法获取参数
    async post() {
        let img=this.params.image;
        let userId=this.params.userId;
        let user_info=this.params.user_info

        //默认BASE64编码
        let imgType="BASE64";
        let result=await addUser(img,imgType, userId, user_info);
        
        //数据库操作


        return result;
    }
};