/* This test will test user changepassword route */

const request = require("supertest");
const secure = require("../security/secure");
test("change user account password", done => {
  request("localhost:" + secure.port)
    .post("/changePassword")
    .send({
      email: "mynewaccount@yahoo.com",
      oldpassword: "123",
      newpassword: "345"
    })
    .set("Accept", "application/json")
    .expect(200, { status: "User Account password is changed" })
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
