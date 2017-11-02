const { Schema } = require('mongoose')

const categorySchema = new Schema({
    name: String,
    id: String
})

const blogSchema = new Schema({
    title: String,
    content: String, //html
    rewContent: String, //markdown
    category: categorySchema, //分类
    date: String
}, {
    _id: false,
    strict: false
})

module.exports = {
    categorySchema,
    blogSchema
}




