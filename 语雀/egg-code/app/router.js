'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //登录注册
  router.post('/login',controller.login.login)
  router.post('/register',controller.register.register)
  //首页展示
  router.get('/home', controller.home.index);
 //角色列表
  router.get('/list',controller.rolelist.index)
  //用户管理
  router.delete('/user/detele',controller.userlist.detele)
  router.get('/user/list',controller.userlist.list)
  //文档管理
  router.get('/doc/list',controller.doc.list)
  router.post('/doc/add',controller.doc.add)
  //知识库管理
  router.get('/known/list',controller.known.list)
  router.post('/known/add',controller.known.add)
  router.delete('/known/delete',controller.known.delete)
};
