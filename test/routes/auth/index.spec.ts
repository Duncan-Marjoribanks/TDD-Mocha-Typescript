import request from "supertest";
import { expect } from "chai";
import createServer from "server";

const app = createServer();

describe("server connects to /healthcheck", function() {
    it("should return a 200 from /healthcheck", function(done) {
        request(app).get("/healthcheck").expect(200, done);
    })
});

describe("server connects to /auth", function() {
    it("should return a 200 from /auth", function(done) {
        request(app).get("/auth").expect(200, done);
    })
});
