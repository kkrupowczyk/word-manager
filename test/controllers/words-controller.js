process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();
let wordsModel = require('../../api/models/words-model');

chai.use(chaiHttp);

describe('words', () => {


    describe('/POST words/', () => {
        it('it should create a new word', (done) => {
            let word = {
                value: "test_word",
            }

            chai.request(server)
                .post('/words')
                .send(word)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('value').equal(word.value);
                    res.body.should.have.property('id');
                    done();
                });
        });

        it('it should delete word by provided id', (done) => {
        });

        it('it shouldn not delete word by provided wrong id', (done) => {
        });

        it('it should return unique list of words', (done) => {
        });

        it('it should return count of provided word', (done) => {
        });
    });

});