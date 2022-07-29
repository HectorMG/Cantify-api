module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // validate Login
    app.post('/api/login', users.validate);

}