/* This test will test single todo list of user /singleTodo route */

//Importing 3rd Party Module
const request = require("supertest");

//Importing User Defined Module
const secure = require("../security/secure");

//Performing Test
test("single todo", done => {
  request("localhost:" + secure.port)
    .post("/singletodo")
    //Sending dummy value
    .send({
      email: "mynewaccount@yahoo.com",
      title: "todo",
      list: ["todo", "todo"]
    })
    .set("Accept", "application/json") //Setting header
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
