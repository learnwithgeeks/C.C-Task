/* This test will test user authentication /signin route */

const request = require("supertest");
const secure = require("../security/secure");
test("authentication", done => {
  request("localhost:" + secure.port)
    .post("/signin")
    .send({ email: "sharma_vivek64@yahoo.com", password: "345" })
    .set("Accept", "application/json")
    .expect(200, { status: "User Logged in" })
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
