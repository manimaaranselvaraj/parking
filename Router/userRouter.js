module.exports = function (app) {

    var userController = require('../Controller/userController');

    app.get('/user/getAllUsers', userController.getAllUsers);
    app.get('/user/getAllStudents', userController.getAllStudents);

}