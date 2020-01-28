'use strict';
const Controller = require('egg').Controller;
class userController extends Controller{
    async list(){
        const {ctx,service} = this
        let data = await service.user.list()
        data.forEach(item=>item.password = '')
        ctx.body={code:200,msg:"用户列表",data}
    }
    async detele(){
        const {ctx,service} = this
        const {id} = ctx.request.body
        let deteleRes = await service.user.detele(id)
        if(deteleRes.affectedRows === 1){
            let list = await service.user.list()
            ctx.body={code:200,msg:"删除成功",list}
        }
    }
}
module.exports = userController
