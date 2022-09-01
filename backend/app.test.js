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
                            title: expect.any(String),
                            sourceLink: expect.any(String),
                            photo: expect.any(String),
                            author: expect.any(String),
                            tags: expect.any(String),
                        })
                    ])
                )
            });
    });

    it('GET /publicFeed/:tags/:perPages --> array public feed list with tags', () => {
        return request(app)
            .get('/publicFeed/:tags/:perPages')
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            title: expect.any(String),
                            sourceLink: expect.any(String),
                            photo: expect.any(String),
                            author: expect.any(String),
                            tags: expect.any(String),
                        })
                    ])
                )
            });
    });
});