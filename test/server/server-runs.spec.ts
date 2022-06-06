import request from "supertest";
import { expect } from "chai";

import createServer from "server";
const app = createServer();


describe("server-checks", function() {
    it("server is created without error", function() {
        console.log('hi from the server folder');
    });
});

describe("server-checks-GET", function() {
    it("server should be running and return a 200 response", function(done) {
        request(app).get("/").expect(200, done);
    });
});

