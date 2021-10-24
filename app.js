const Koa = require('koa');
const kf = require('kf-router');
const paramStandard=require('./middleware/params.js');
const returnStandard=require('./middleware/return.js');
const CORS = require('./middleware/cors.js');
const bodyParser = require('koa-bodyparser')
const HttpClient = require('./baidu-aip-sdk').HttpClient;


const app = new Koa();

app.use(bodyParser({
  'formLimit':'15mb',
  'jsonLimit':'15mb',
  'textLimit':'15mb',
}))
app.use(CORS);
app.use(paramStandard);
app.use(returnStandard);

app.use(kf());
app.listen(3000);

// 设置request库的一些参数，例如代理服务地址，超时时间等
// request参数请参考 https://github.com/request/request#requestoptions-callback
HttpClient.setRequestOptions({timeout: 7000});

module.exports=app;