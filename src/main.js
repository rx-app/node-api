const Koa = require('koa')

const app = new Koa()

app.use( (ctx,next)=>{
  ctx.body = 'hellow word'
} )

app.listen(3000,()=>{
  console.log( 'server is running at http://localhost:3000/');
})