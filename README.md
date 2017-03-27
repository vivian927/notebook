# notebook
使用nodejs实现

##修改的内容

app/index.js 修改为

```javascript
staticServer().then(apiServer).then(()=>{
  response.end()
})
```

