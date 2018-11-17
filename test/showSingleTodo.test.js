const request = require("supertest");
const secure = require("../security/secure");
test("Show single user own todo", done => {
  request("localhost:" + secure.port)
    .post("/showsingletodo")
    .send({ email: "mynewaccount@yahoo.com" })
    .set("Accept", "application/json")
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
