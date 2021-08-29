const handlerBlogRouter = (req, res) => {
    const method = req.method;
    if (method === 'GET' && req.path === '/api/blog/list') {
        return {
            msg: 'Blog list api'
        }
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