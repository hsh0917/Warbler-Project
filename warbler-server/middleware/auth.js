require("dotenv").load();
var jwt = require("jsonwebtoken");

// make sure the user is logged - Authentication
exports.loginRequired = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]; // Authentication is followed by a space and then entire token (eg, Bearer fajh@#klj534908hah3k4)
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (decoded) {
                // if successfully decoded the token, move on to the next piece of middleware that might be making sure youi have the correct user.
                next();
            } else {
                return next({ status: 401, message: "Please Log In First" });
            }
        });
    } catch (e) {
        return next({ status: 401, message: "Please Log In First" });
    }
};

// make sure we get the correct user - Authorization
exports.ensureCorrectUser = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            console.log("decoded: ", decoded);
            console.log("decoded.id: ", decoded.id);
            console.log("req.params.id: ", req.params.id);
            if (decoded && decoded.id === req.params.id) { // if successfully decoded the token, move on to the next piece of middleware that might be making sure youi have the correct user.
                return next();
            } else {
                return next({ status: 401, message: "Unauthorized" });
            }
        });
    } catch (e) {
        return next({ status: 401, message: "Unauthorized" });
    }
};
