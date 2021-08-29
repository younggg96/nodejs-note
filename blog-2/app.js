const serveHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    res.end(
        JSON.stringify(resData)
    )
}

module.exports = serveHandle

