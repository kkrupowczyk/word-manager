let wordsModel = require('../models/words-model');

exports.create_word = function (req, res) {
    let word = req.body;
    let wordObject = wordsModel.create_word(word.value)

    res.status(201)
        .json(wordObject);
};

exports.get_unique_words = function (req, res) {
    let words = wordsModel.get_unique_words()
    res.status(200)
        .json({words: words});
};

exports.delete_word = function (req, res) {
    let params = req.params;
    let result = wordsModel.delete_word(params.id)
    if(result === true){
        res.status(204)
            .send();
    }else {
        res.status(404)
            .send();
    }
};

exports.get_word_count = function (req, res) {
    let params = req.params;
    console.log(params)
    let count = wordsModel.get_word_count(params.word)

    res.status(200)
        .json({"count": count});
};
