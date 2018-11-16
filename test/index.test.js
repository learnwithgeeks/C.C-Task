/* This test will test / route */

const request = require("supertest");
const secure = require("../security/secure");
test("user session test", done => {
  request("localhost:" + secure.port)
    .get("/")
    .expect(400, { status: "User Session Not Found" })
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
