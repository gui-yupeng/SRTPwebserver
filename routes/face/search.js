const mongo=require('../../mongodb.js');
const dbMsg=require('../../dbMsg.json');
const faceSearch=require('../../aip_tools').faceSearch;
exports.route = {
  //通过POST方法获取参数
    async post() {
        let img=this.params.image;
        //默认BASE64编码
        let imgType="BASE64";
        let result=await faceSearch(img,imgType);
        console.log(result);
        let user_list=result.result.user_list[0];
        let now=new Date();
        let year=now.getFullYear();
        let month=now.getMonth()+1;
        let day=now.getDay();        
        //数据库操作
        if(user_list.score<80){
          return "图片匹配得分过低，您不是我们的员工";
        }
        else{
          let msgCollection = await mongo(dbMsg.col_dayCheck);
          await msgCollection.insertOne({"timeStamp":result.timestamp,
                                          "year":year,
                                          "month":month,
                                          "day":day,
                                          "temp":35.6,
                                          "group_id": user_list.group_id,
                                          "user_id": user_list.user_id,
                                          "user_info": user_list.user_info,
                                          "score": user_list.score,
                                          "iamgeBase64":img,});
          user_list["result"]="签到成功！"
          return user_list;
        }
        
        
    }
};