const Jwt = require("./jwt")

module.exports = async (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).send('Acess-denied, JWT token is required to access')
    }

    try{
        let verified = await Jwt.verifyToken(token)
        req.user = verified
        next()
    } catch(err) {
        res.status(400).send('Invalid Token')
    }

}