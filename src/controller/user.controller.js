const {createUser} = require('../service/use.service')

class UserController {
    async register(ctx,next){
        // 1.获取数据
        console.log(ctx.request.body);
        const {user_name,password} = ctx.request.body
        // 2.操作数据库
        let res = await createUser(user_name,password)
        console.log(res);
        // 3.返回结果
        ctx.body = '用户注册成功'
    }
    async login(ctx,next){
        ctx.body = '登录成功'
    }
}

module.exports = new UserController