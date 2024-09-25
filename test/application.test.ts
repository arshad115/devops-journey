import createApp from "../src/application";
import * as express from 'express';
const request = require('supertest');

describe("GET /", () => {
    let app: express.Application;

    before(() => {
        app = createApp();
    });

    it("should return Hello World!", async () => {
        const response = await request(app).get("/");
        if (response.status !== 200) {
            throw new Error(`Expected status 200, but got ${response.status}`);
        }
        if (response.text !== "Hello World!") {
            throw new Error(`Expected text "Hello World!", but got ${response.text}`);
        }
    });
});