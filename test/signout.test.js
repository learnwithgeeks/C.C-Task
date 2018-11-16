/* This test will test when user logout /signout route */

const request = require("supertest");
const secure = require("../security/secure");
test("user session destroy", done => {
  request("localhost:" + secure.port)
    .post("/signout")
    .expect(200, { status: "User Logout" })
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
