'use strict';

module.exports = function(app) {
    let todoList = require('../controllers/words-controller');

    app.route('/words')
        .post(todoList.create_word);
};