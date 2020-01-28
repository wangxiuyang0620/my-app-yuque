const url = require('url')
const jwt = require('jsonwebtoken')
function verifyFunc(token, ctx) {
    return new Promise(res => {
        jwt.verify(token, ctx.app.config.keys, (error, result) => {
            if (error) throw error
            res(result)
        })
    })
}
module.exports = options => {
   
    return async (ctx, next) => {
        if (options.includes(url.parse(ctx.url).pathname)) {
            await next()
            return
        }
  
        let token = ctx.get('authorToken')
        console.log(token)
        if (!token) {
            ctx.body = { code: 400, msg: "没有权限访问，请登录" }
            return
        }
        let info
        try {
            info = await verifyFunc(token, ctx)
        }
        catch(error){
            ctx.body={code:400,msg:"权限无效，重新登录"}
            return
        }
        ctx.info = info
        await next()
    }
}