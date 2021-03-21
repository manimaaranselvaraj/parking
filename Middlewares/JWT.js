const tokenSecret = require('../Config/token');
var jwt = require('jsonwebtoken');

const authenticateJWT = (req) => {
    const authHeader = req.headers.authorization;
    var result;
    if (authHeader) {
        const token = authHeader;
        if(token == tokenSecret.accessTokenSecret) {
            result = 200;
            }
            else {
            result = 403;
            }

    } else {
        result = 404;
    }
    return result;
};

module.exports = {
    authenticateJWT: authenticateJWT
}
