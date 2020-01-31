'use strict';

const Controller = require('egg').Controller;
const md5= require('js-md5')
class RegisterController extends Controller {
  async register() {
    const { ctx } = this;
    let { username, password } = ctx.request.body
    if (username === '') {
      ctx.body = { code: 400, msg: "用户名不能为空" }
      return
    }
    if (password === '') {
      ctx.body = { code: 400, msg: "密码不能为空" }
      return
    }
    const result = await this.service.user.login(username)
    if(result.length > 0){
      ctx.body={code:400,msg:'用户已注册'}
      return
    }
    const registerres = await this.service.user.registeruser(username,md5(password))
    if(registerres.affectedRows === 1){
      ctx.body={code:200,msg:'注册成功'}
      return
    }
  }
}

module.exports = RegisterController;