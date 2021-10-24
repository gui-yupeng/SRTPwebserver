var AipFaceClient = require("./baidu-aip-sdk").face;

// 设置APPID/AK/SK
var APP_ID = "25044464";
var API_KEY = "kdk7E4K3rz8AQSq9Qame4XaI";
var SECRET_KEY = "EWsoztbfH2s2eQG2rEDDdbOGEkASfO9S";

let client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);

//image取决于image_type参数，传入BASE64字符串或URL字符串或FACE_TOKEN字符串
//var image ;
//var imageType = "BASE64";
let result=null;
// 调用人脸检测
faceDetect= async function (image,imageType){
    let options = {};
    options["face_field"] = "age,beauty,gender";
    if(client){
        result=await client.detect(image, imageType, options);
    }else{
        client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);
        result=await client.detect(image, imageType, options);
    }
    

    
    return result;
}

//注意，这些函数都是异步的
module.exports={
    faceDetect
}
