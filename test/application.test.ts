import createApp from "../src/application";
import * as express from 'express';
const request = require('supertest');

describe("GET /", () => {
    let app: express.Application;

    before(() => {
        app = createApp();
    });

    it("should return Hello World!", async () => {
        const response = await request(app).get("/").expect(200).expect("Hello World!");
    });
});
