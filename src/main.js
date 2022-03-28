const Koa = require('koa')

const {APP_PORT} = require('./config/config.default')

const app = new Koa()

app.use( (ctx,next)=>{
  ctx.body = 'hellow word'
} )

app.listen(APP_PORT,()=>{
  console.log( `server is running at http://localhost:${APP_PORT}/`);
})