/* This test will test /notification route */

const request = require("supertest");
const secure = require("../security/secure");
test("user token test", done => {
  request("localhost:" + secure.port)
    .post("/notification")
    .send({
      email: "mynewaccount@yahoo.com",
      token: "sidhfiudhgiudshfdjdh"
    })
    .set("Accept", "application/json")
    .expect(200, { status: "User Token Stored" })
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
