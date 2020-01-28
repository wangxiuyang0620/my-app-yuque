'use strict';

const Controller = require('egg').Controller;
const md5 = require('js-md5')
const jwt = require('jsonwebtoken')
class UserController extends Controller {
  async login() {
    const { ctx,app } = this;
    let { username, password } = ctx.request.body
    console.log(password)
    if (username === '') {
      ctx.body = { code: 400, msg: "用户名不能为空" }
      return
    }
    if (password === '') {
      ctx.body = { code: 400, msg: "密码不能为空" }
      return
    }
    const result = await this.service.user.login(username)
    if(result.length === 0){
      ctx.body={code:400,msg:'用户未注册'}
      return
    }
    if(md5(result[0].password) !== md5(password)){
      ctx.body={code:400,msg:'密码错误'}
      return
    }
    let token = jwt.sign({...result[0]},app.config.keys)
    ctx.body={code:200,msg:'登录成功',data:{token}}
  }
}

module.exports = UserController;