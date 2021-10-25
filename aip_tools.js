var AipFaceClient = require("./baidu-aip-sdk").face;

// 设置APPID/AK/SK
var APP_ID = "25044464";
var API_KEY = "kdk7E4K3rz8AQSq9Qame4XaI";
var SECRET_KEY = "EWsoztbfH2s2eQG2rEDDdbOGEkASfO9S";

let client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);

//image取决于image_type参数，传入BASE64字符串或URL字符串或FACE_TOKEN字符串
//var image ;
//var imageType = "BASE64";

faceDetect= async function (image,imageType){
    let result=null;
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

addUser=async function(image,imageType, userId, user_info){
    let result=null;
    //测试项目，把groupId写死为'group_staff'
    groupId='group_staff';
    let options = {};
    options["user_info"] = user_info;
    // 带参数调用人脸更新
    result=await client.addUser(image, imageType, groupId, userId, options);
    return result;
}

faceSearch= async function(image,imageType){
    //测试项目，把groupId写死为'group_staff'
    let groupIdList = "group_staff";
    let result=null;
    // 调用人脸搜索
    result=await client.search(image, imageType, groupIdList);
    return result;
}

getUser = async function(userId){
    //测试项目，把groupId写死为'group_staff'
    let groupId = "group_staff";
    let result=null;
    // 调用用户信息查询
    result=await client.getUser(userId, groupId)
}

getGroupUsers = async function(groupId){
    //测试项目，把groupId写死为'group_staff'
    let groupId = "group_staff";
    let result=null;
    // 调用获取用户列表
    result=await client.getGroupUsers(groupId)


}

//注意，这些函数都是异步的
module.exports={
    // 人脸检测
    faceDetect,
    // 添加用户
    addUser,
    // 人脸搜索
    faceSearch,
    // 用户信息查询
    getUser,
    // 获取用户组列表
    getGroupUsers
}
