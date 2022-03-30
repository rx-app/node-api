const {createUser,getUserInfo} = require('../service/use.service')

class UserController {
    async register(ctx,next){
        // 1.获取数据
        console.log(ctx.request.body);
        const {user_name,password} = ctx.request.body
        // 合法性
        if(!user_name || !password){
            console.error('用户名或密码为空',ctx.request.body)
            ctx.status = 400
            ctx.body = {
                code:'1000',
                message:'用户名或密码不能为空',
                result:'',
            }
            return
        }
        // 合理性
        if(getUserInfo({user_name})){
            ctx.status = 409
            ctx.body = {
                code:'1002',
                message:'用户已经存',
                result:''
            }
            return
        }
        // 2.操作数据库
        let res = await createUser(user_name,password)
        console.log(res);
        // 3.返回结果
        ctx.body = {
            code:0,
            message:'用户注册成功',
            result:{
                id:res.id,
                user_name:res.user_name
            }
        }
    }
    async login(ctx,next){
        ctx.body = '登录成功'
    }
}

module.exports = new UserController