const mongo=require('../../mongodb.js');
const dbMsg=require('../../dbMsg.json');
const getGroup=require('../../aip_tools').getGroupUsers

exports.route = {
    
    async post() {
        let result=await getGroup();
        return result;
    }
};