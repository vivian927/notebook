/**
 * use mongoose to handle ajax
 */
const Router = require('./router')
const { 
	$_saveBlog,
	$_saveCategory,
	$_getCategoryList,
	$_getBlogDetail,
	$_getBlogList,
  $_deleteBlog  } = require('./mongo')
  
//获取分类列表
Router.get('/categoryList.action', ctx=>{
  return $_getCategoryList()
})
//增加分类
Router.post('/category.action', ctx=>{
  let category = ctx.reqCtx.body
  console.log(category)
  return $_saveCategory(category)
})
//添加博客
Router.post('/blog.action', ctx=>{
    let blog = ctx.reqCtx.body

    return  $_saveBlog(blog)
})

// let api = '/blogDetail.action'
// let api = '/blogList.action'
// let api = '/deleteBlog.action'
module.exports = Router