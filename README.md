# notebook
Node.js实现个人博客网站，不借助任何框架。
抽象出基于Promise的中间件，类似Express的api

## 使用方法
```bash
git clone https://github.com/altairlu/notebook.git

# Start MongoDB
# 脚本路径改成对应的数据库地址
sh ./db.sh

# Start Node.js code
npm install
npm start

# Clone the Fontend resources
git clone https://github.com/altairlu/notebook-fontend.git public
cd public
npm install

# Build the Fontend resources
npm start #Development
npm run build #Production
```

## 项目结构

```bash

	|- app  Node中间件及服务
	|	|
	|	|- 库   Promise + ejs
	|
	|
	|- public  前端
	|	|
	|	|- 库   Ant-Design + react
	|
	|
	|- db.sh   运行MongoDB
	|	|
	|	|- 库   mongoose
	|
	|- index.js  入口

```