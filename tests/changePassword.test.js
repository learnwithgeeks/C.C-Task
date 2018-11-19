/* This test will test user /changepassword route */

//Importing 3rd Party Modules
const request = require("supertest");

//Importing User Defined Module
const secure = require("../security/secure");

//Performing Test
test("change user account password", done => {
  request("localhost:" + secure.port)
    .post("/changePassword")
    //Sending dummy value
    .send({
      email: "mynewaccount@yahoo.com",
      oldpassword: "123",
      newpassword: "345"
    })
    .set("Accept", "application/json") //Setting header
    .expect(200, { status: "User Account password is changed" }) //Expecting response with status 200
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
