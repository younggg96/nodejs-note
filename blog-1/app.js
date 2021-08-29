const serveHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const resData = {
        name: 'guanggeng',
        site: 'bbb',
        env: process.env.NODE_ENV
    }
    res.end(
        JSON.stringify(resData)
    )
}

module.exports = serveHandle

