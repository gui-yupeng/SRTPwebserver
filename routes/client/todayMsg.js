const mongo=require('../../mongodb.js');
const dbMsg=require('../../dbMsg.json');

exports.route = {
  //通过POST方法获取参数
    
    async post() {
        let msgCollection = await mongo(dbMsg.col_dayCheck);
        let now=new Date();
        let year=now.getFullYear();
        let month=now.getMonth()+1;
        let day=now.getDay(); 
        let result=await msgCollection.find({"year":year,
                                            "month":month,
                                            "day":day}).toArray();
        return result;
    }
};