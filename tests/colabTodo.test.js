/* This test will test collabrative todo list for multiple users /colabTodo route */

//Importing 3rd Party Modules
const request = require("supertest");

//Importing User Defined Module
const secure = require("../security/secure");

//Performing Test
test("single todo", done => {
  request("localhost:" + secure.port)
    .post("/colabtodo")
    //Sending dummy value
    .send({
      email: ["mynewaccount@yahoo.com", "sharma_vivek62@yahoo.com"],
      title: "todo",
      list: ["todo", "homework"]
    })
    .set("Accept", "application/json") //Setting header
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
