'use strict';

const Controller = require('egg').Controller;
class roleController extends Controller {
    async index() {
        let data = await this.service.role.searchRole()
        this.ctx.body = { code: 200, msg: '列表',data }
    }
   
}
module.exports = roleController