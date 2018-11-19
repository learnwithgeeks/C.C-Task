/* This test will test user authentication /signin route */

//Importing 3rd Party Modules
const request = require("supertest");

//Importing User Defined Module
const secure = require("../security/secure");

//Performing Test
test("authentication", done => {
  request("localhost:" + secure.port)
    .post("/signin")
    //Sending dummy value
    .send({ email: "sharma_vivek64@yahoo.com", password: "345" })
    .set("Accept", "application/json") //Setting header
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
