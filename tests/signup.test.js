/* This test will test user create account /signup route */

//Importing 3rd Party Module
const request = require("supertest");

//Importing User Defined Module
const secure = require("../security/secure");

//Performing Test
test("user create account", done => {
  request("localhost:" + secure.port)
    .post("/signup")
    //Sending dummy value
    .send({ email: "mynewaccount@yahoo.com", password: "123" })
    .set("Accept", "application/json") //Setting header
    .expect(200, { status: "User account is created" }) //Expecting response with status 200
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
