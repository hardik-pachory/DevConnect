const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function (req, res, next) {
    // Get Token from the header
    const token = req.header("x-auth-token")
    if (!token) {
        res.status(401).json({ msg: "No Token, Authorization Denied." });
    }
    // Verify the token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid Token." });
    }
}