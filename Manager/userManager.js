var db = require("../Config/db");
var mysql = require('mysql');
var con = mysql.createPool(db)
var { authenticateJWT } = require('../Middlewares/JWT')

const apiResponseMessage = require("../Utils/apiResponseMessage");
const tableName = require("../Config/tableName");


async function getAllUsers(req, cb) {

    //----------authentication check-----------------------
    var jwtResponsse = await authenticateJWT(req);
    if (jwtResponsse === 403) {
        cb(null, {
            status: 403,
            body: {
                status: false,
                message: apiResponseMessage.invalidJWTToken,
                data: null,
            }
        })
    }
    else if (jwtResponsse === 404) {
        cb(null, {
            status: 404,
            body: {
                status: false,
                message: apiResponseMessage.authorizationError,
                data: null,
            }
        })
    }
    else if (jwtResponsse === 200) {
        con.getConnection(function (err, connection) {
            if (err) {
                // console.log(err)
                cb(null, {
                    status: 500,
                    body: {
                        status: false,
                        message: apiResponseMessage.serverError,
                        data: null
                    }
                })
            }
            else {
                //---------------get values from  table----------------------------
                var getUserQuery = `select * from ${tableName.user}`;
                con.query(getUserQuery, function (err, result) {
                    if (err) {
                        cb(null, {
                            status: 200,
                            body: {
                                status: false,
                                message: err.sqlMessage,
                                data: null
                            }
                        })
                        connection.release()
                    }
                    else {
                        cb(null, {
                            status: 200,
                            body: {
                                status: true,
                                message: apiResponseMessage.Success,
                                data: result,
                            }
                        })
                        connection.release()
                    }
                })
            }
        })
    }
}

async function getAllStudents(req, cb) {

    //----------authentication check-----------------------
    var jwtResponsse = await authenticateJWT(req);
    if (jwtResponsse === 403) {
        cb(null, {
            status: 403,
            body: {
                status: false,
                message: apiResponseMessage.invalidJWTToken,
                data: null,
            }
        })
    }
    else if (jwtResponsse === 404) {
        cb(null, {
            status: 404,
            body: {
                status: false,
                message: apiResponseMessage.authorizationError,
                data: null,
            }
        })
    }
    else if (jwtResponsse === 200) {
        con.getConnection(function (err, connection) {
            if (err) {
                // console.log(err)
                cb(null, {
                    status: 500,
                    body: {
                        status: false,
                        message: apiResponseMessage.serverError,
                        data: null
                    }
                })
            }
            else {
                //---------------get values from  table----------------------------
                var getUserQuery = `select * from ${tableName.student}`;
                con.query(getUserQuery, function (err, result) {
                    if (err) {
                        cb(null, {
                            status: 200,
                            body: {
                                status: false,
                                message: err.sqlMessage,
                                data: null
                            }
                        })
                        connection.release()
                    }
                    else {
                        cb(null, {
                            status: 200,
                            body: {
                                status: true,
                                message: apiResponseMessage.Success,
                                data: result,
                            }
                        })
                        connection.release()
                    }
                })
            }
        })
    }
}

module.exports = {
    getAllUsers: getAllUsers,
    getAllStudents:getAllStudents
}