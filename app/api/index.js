const Router = require('./router')
//获取分类列表
Router.get('/categoryList.action', ctx=>{
    return {a:1}
})
//增加分类
Router.get('/category.action', ctx=>{
    return {a:2}
})
//添加博客
Router.get('/blog.action', ctx=>{
    return  {a:3}
})

// let api = '/blogDetail.action'
// let api = '/blogList.action'
// let api = '/deleteBlog.action'

module.exports=(ctx)=>{
    let {reqCtx,resCtx,res} = ctx;
    let {pathname,method} = reqCtx;
    
    let apiMap = {
        '/list.action':['animal','pork','chicken'],
        '/user.action':['moli','creed', 'china']
    };
    return Promise.resolve({
        then:(resolve,reject)=>{
            
            if (pathname.match('action')){

                return Router.routes(ctx).then(val=>{
                    resCtx.body = JSON.stringify(val);
                    resCtx.headers = Object.assign(resCtx.headers,{
                        'Content-Type':'application/json'
                    })
                    resolve()
                })
            }
            resolve();
        }
    })
}