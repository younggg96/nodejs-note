const querystring = require('querystring')
const handlerBlogRouter = require("./src/router/blog")
const handleUserRouter = require("./src/router/user")

// 系统基础设置
const serveHandle = (req, res) => {
    // 设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')

    // 获取 path
    const url = req.url
    req.path = url.split('?')[0]

    // 解析 query
    req.query = querystring.parse(req.path)

    // 处理blog路由
    const blogData = handlerBlogRouter(req, res)
    if (blogData) {
        res.end(
            JSON.stringify(blogData, null, 2)
        )
        return
    }

    //  处理user路由
    const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(
            JSON.stringify(userData, null, 2)
        )
        return
    }

    // 未命中 404
    res.writeHead(404, { "Content-type": "text/plain" })
    res.write("404 NOT FOUND\n")
    res.end()
}

module.exports = serveHandle

