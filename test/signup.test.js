/* This test will test user create account /signup route */

const request = require("supertest");
const secure = require("../security/secure");
test("user create account", done => {
  request("localhost:" + secure.port)
    .post("/signup")
    .send({ email: "mynewaccount@yahoo.com", password: "123" })
    .set("Accept", "application/json")
    .expect(200, { status: "User account is created" })
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
