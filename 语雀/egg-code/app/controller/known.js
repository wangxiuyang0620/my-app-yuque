const Controller = require('egg').Controller;
class KnownController extends Controller {
    
    async list(){
        let data = await this.service.known.list()
        this.ctx.body ={code:0,msg:'',data}
      
    }
    async delete(){
        const {id} = this.ctx.request.body
        let deleteRes = await this.service.known.delete(id)
        if(deleteRes.affectedRows === 1){
            this.ctx.body = {code:0,msg:'删除成功'}
            return
        }
        this.ctx.body = {code:1,msg:'删除失败'}
        
    }
    async add(){
        const {name,describe} = this.ctx.request.body
        let addRes = await this.service.known.add(name,describe)
        if(addRes.affectedRows === 1){
            this.ctx.body = {code:0,msg:'添加成功'}
            return
        }
        this.ctx.body = {code:1,msg:'添加失败'}    
    }    
}
module.exports = KnownController;