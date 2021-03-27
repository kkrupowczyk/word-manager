const {v4: uuidv4} = require('uuid');

let words = []

exports.create_word = function (word) {
    let wordObject = {
        id: uuidv4(),
        value: word
    }

    words.push(wordObject);

    return wordObject;
};

exports.get_unique_words = function () {
    let wordValues = words.map(wordObject => wordObject.value);
    return [...new Set(wordValues)];
};

exports.delete_word = function (id) {
    let wordIndex = words.findIndex(wordObject => wordObject.id === id);
    if (wordIndex !== -1) {
        words.splice(wordIndex, 1);
        return true;
    } else {
        return false
    }
};

exports.get_word_count = function (word) {
    let filteredWords = words.filter(wordObject => wordObject.value === word);
    return filteredWords.length;
};

exports.delete_all = function () {
    words = [];
    return words;
};

