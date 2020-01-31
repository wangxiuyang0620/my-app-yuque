const Service = require('egg').Service;

class DocService extends Service {
  
    async list() {
        return  await this.app.mysql.select('doc')
    }
    async add(obj) {
        return  await this.app.mysql.insert('doc',obj)
    }
  
  }
  
  
  module.exports = DocService;