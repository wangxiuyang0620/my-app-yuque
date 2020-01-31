const Service = require ('egg').Service
class RoleService extends Service{
    async searchRole(role){
        return await this.app.mysql.select('role',{where:{name:role}})
    }
}
module.exports = RoleService