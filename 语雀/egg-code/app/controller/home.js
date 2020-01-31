'use strict';

const Controller = require('egg').Controller;
const tablist = require('../../config/tablist.js')
class HomeController extends Controller {
  async index() {
    const { ctx } = this
    let roleRes = await this.service.role.searchRole(this.ctx.info.role)
    let newArr = roleRes.map(item => tablist[item.menu])
     let list =[]
     newArr.forEach(item=>{
      let index = list.findIndex(v=>v.title === item.classType )
      if(index !== -1){
        list[index].children.push({
          path: item.to,
            title: item.name,
            key: item.key,
        })
        return
      }
      list.push({
        key: 'sub'+item.key,
        type: item.icon,
        title: item.classType,
        children:[
          {
            path: item.to,
            title: item.name,
            key: item.key,
          }
        ]
      })
     })
     ctx.body = {code:200,msg:'',list}
  }
}

module.exports = HomeController;


          