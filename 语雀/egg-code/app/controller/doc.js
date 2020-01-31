
const Controller = require('egg').Controller;
class DocController extends Controller {

    
    async list(){
        let data = await this.service.doc.list()
        this.ctx.body ={code:200,msg:'',data}
      
    }
    async add(){
        const {subData} = this.ctx.request.body

        let addRes = await this.service.doc.add(subData)
        if(addRes.affectedRows === 1){
            this.ctx.body = {code:0,msg:'添加成功'}
            return
        }
        this.ctx.body = {code:1,msg:'添加失败'}    
    } 
     
}
module.exports = DocController;