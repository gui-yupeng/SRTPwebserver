const mongo=require('../../mongodb.js');
const dbMsg=require('../../dbMsg.json');

exports.route = {
    
    async post() {
        let result=await getGroup();
        return result;
    }
};