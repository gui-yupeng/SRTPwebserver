const mongo=require('../../mongodb.js');
const dbMsg=require('../../dbMsg.json');
const faceDetect=require('../../aip_tools').faceDetect;

exports.route = {
  //通过POST方法获取参数
  
  async post() {
    let img=this.params.image;
    //console.log(img);不要再做类似的疯狂事了
    //默认BASE64编码
    let imgType="BASE64";
    let result=await faceDetect(img,imgType);
    //let msgCollection = await mongo(dbMsg.col_dayCheck);
    //await msgCollection.insertOne({"faceNum":result.face_num,"iamgeBase64":img});
    return result;
  }
};
