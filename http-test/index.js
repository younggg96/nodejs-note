const http = require('http')
const querystring = require('querystring')

// method: "GET"
// path: "/app"
// query: {user: "xiaohong", id: "1213"}
// url: "/app?user=xiaohong&id=1213"


const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    //  设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')

    const resData = {
        method,
        url,
        path,
        query
    }
    if (method === 'GET') {
        res.end(JSON.stringify(resData))
    }
})

server.listen(8000)
console.log('OK')