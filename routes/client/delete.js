const mongo=require('../../mongodb.js');
const dbMsg=require('../../dbMsg.json');

exports.route = {
    
    async post() {
        //默认只删除今天的
        let user_id=this.params.id;
        let msgCollection = await mongo(dbMsg.col_dayCheck);
        let now=new Date();
        let year=now.getFullYear();
        let month=now.getMonth()+1;
        let day=now.getDay(); 
        let result=await msgCollection.deleteOne({"user_id":user_id,
                                                    "year":year,
                                                    "month":month,
                                                    "day":day});
        return result;
    }
};