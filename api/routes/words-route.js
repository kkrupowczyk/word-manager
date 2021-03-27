'use strict';

module.exports = function(app) {
    let wordsController = require('../controllers/words-controller');

    app.route('/words')
        .post(wordsController.create_word);

    app.route('/words/:id')
        .delete(wordsController.delete_word);

    app.route('/words/unique')
        .get(wordsController.get_unique_words);

    app.route('/words/:word/count')
        .get(wordsController.get_word_count);

};
