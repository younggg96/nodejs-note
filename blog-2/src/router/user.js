const handleUserRouter = (req, res) => {
    const method = req.method;
    if (method === 'POST' && req.path === '/api/users/login') {
        return {
            msg: 'Login api'
        }
    }
}

module.exports = handleUserRouter