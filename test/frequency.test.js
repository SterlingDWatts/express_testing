const app = require('../app')
const { expect } = require('chai');
const supertest = require('supertest');

describe(`GET frequenct endpoint`, () => {

    it('should return the correct "counts", "avg", "maxCount", "maxChar", and "unique".', () => {

        const query = {
            s: 'A random string'
        };

        const expected = {
            "a": 2,
            "r": 2,
            "n": 2,
            "d": 1,
            "o": 1,
            "m": 1,
            "s": 1,
            "t": 1,
            "i": 1,
            "g": 1,
            "unique": 10,
            "average": 1.5,
            "highest": "a"
        }

        return supertest(app)
            .get('/frequency')
            .query(query)
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.eql(expected)
            });
    });

});
