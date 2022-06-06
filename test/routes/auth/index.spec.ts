import request from "supertest";
import { expect } from "chai";
import createServer from "server";

const app = createServer();

describe("server connects to /auth", function() {
    it("should return a 200 from /auth", function(done) {
        request(app).get("/auth").expect(200, done);
    })
});
