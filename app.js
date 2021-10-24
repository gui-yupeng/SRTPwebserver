const Koa = require('koa');
const kf = require('kf-router');
const paramStandard=require('./middleware/params.js');
const returnStandard=require('./middleware/return.js');
const CORS = require('./middleware/cors.js');
const bodyParser = require('koa-bodyparser')

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

module.exports=app;