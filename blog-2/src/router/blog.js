const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handlerBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id

    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        if (listData) {
            return new SuccessModel(data)
        } else {
            return new ErrorModel(data)
        }
    }
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const data = getDetail(id)
        if (data) {
            return new SuccessModel(data)
        } else {
            return new ErrorModel(data)
        }
    }
    if (method === 'POST' && req.path === '/api/blog/new') {
        const blogData = req.body
        const data = newBlog(blogData)
        if (data) {
            return new SuccessModel(data)
        } else {
            return new ErrorModel(data)
        }
    }
    if (method === 'POST' && req.path === '/api/blog/del') {
        const data = deleteBlog(id)
        if (data) {
            return new SuccessModel(data)
        } else {
            return new ErrorModel(data)
        }
    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        const blogData = req.body
        const data = updateBlog(id, blogData)
        if (data) {
            return new SuccessModel(data)
        } else {
            return new ErrorModel(data)
        }
    }
}

module.exports = handlerBlogRouter