## Word manager
Simple REST-API for managing list of words. Exposes following actions:
1. Adding words to collection
   ```
    POST /words with body {"value": "test_word"}
   ```
   Response example for success:
   ```
    status: 200
    body: {
        "id": "c99d99ff-ae2e-45d2-8e94-3acbb68cdd5b",
        "value": "test_word"
    }
   ```
1. Deleting words from collection
   ```
   DELETE /words/{wordId}
    ```
   Response example for success:
   ```
    status: 204
   ```
   Response example for failure:
   ```
    status: 404
   ```
1. Getting the number of appearances of the word in collection
   ```
   GET /words/{word}/count
    ```
   Response example for success:
   ```
    status: 200
    body: {"count": 6}
   ```
1. Getting all unique words from collection
   ```
   GET /words/unique
    ```
   Response example for success:
   ```
    status: 200
    body:{
      "words": [
        "dog",
        "cow",
        "cat"
      ]
    }
   ```

## Tech stack
1. App: [Node.js](https://nodejs.org/en/) + [Express.js](https://expressjs.com/)
2. Tests: [Mocha](https://mochajs.org/) + [Chai.js](https://www.chaijs.com/)

## Setup
1. Install [Node.js](https://nodejs.org/en/)
1. Run npm install
1. Run npm start
1. Check localhost:3000

## Tests
1. Run npm test


## TODO
1. Finished writing tests.
1. Add Swagger for REST-API docs
1. Use document database like MongoDB
1. Create front-end client using React.js
1. Add logging to REST-API
1. Create postman doc for easier manual testing