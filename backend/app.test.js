const request = require('supertest');
const { response } = require('./app');
const app = require('./app');

describe('Public Feed API', () => {
    it('GET /publicFeed --> array public feed list', () => {
        return request(app)
            .get('/publicFeed/:perPages')
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            title: expect.any(String)
                        })
                    ])
                )
            });
    });
});