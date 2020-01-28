const Service = require('egg').Service;

class KnownService extends Service {
  
    async list() {
        return  await this.app.mysql.select('known')
    }
    async delete(id) {
        return  await this.app.mysql.delete('known',{id})
    }
    async add(name,describe) {
        return  await this.app.mysql.insert('known',{id:null,name,describe})
    }
  }
  
  
  module.exports = KnownService;