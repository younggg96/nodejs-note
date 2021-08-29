const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handlerBlogRouter = (req, res) => {
    const method = req.method;
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }
    if (method === 'GET' && req.path === '/api/blog/detail') {
        return {
            msg: 'Blog detail api'
        }
    }
    if (method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: 'Blog new api'
        }
    }
    if (method === 'POST' && req.path === '/api/blog/del') {
        return {
            msg: 'Blog delete api'
        }
    }
    if (method === 'GET' && req.path === '/api/blog/update') {
        return {
            msg: 'Blog update api'
        }
    }
}

module.exports = handlerBlogRouter