"use strict";
const config = require('../Manager/userManager');

/* Start All Users*/

exports.getAllUsers = function (req, res) {
    config.getAllUsers(req, function (err, result) {
        res.status(result.status).send(result.body)
    })

};

exports.getAllStudents = function (req, res) {
    config.getAllStudents(req, function (err, result) {
        res.status(result.status).send(result.body)
    })

};