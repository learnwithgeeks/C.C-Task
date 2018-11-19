/* This test will test /notification route */

//Importing 3rd Party Modules
const request = require("supertest");

//Importing User Defined Module
const secure = require("../security/secure");

//Performing Test
test("user token test", done => {
  request("localhost:" + secure.port)
    .post("/notification")
    //Sending dummy value
    .send({
      email: "mynewaccount@yahoo.com",
      token: "sidhfiudhgiudshfdjdh"
    })
    .set("Accept", "application/json") //Setting header
    .expect(200, { status: "User Token Stored" }) //Expecting response with status 200
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
