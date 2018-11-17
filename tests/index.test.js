/* This test will test / route */

const request = require("supertest");
const secure = require("../security/secure");
test("user session test", done => {
  request("localhost:" + secure.port)
    .get("/")
    .expect(200, { status: "User Session Found" })
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
