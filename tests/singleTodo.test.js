/* This test will test single todo list of user /singleTodo route */

const request = require("supertest");
const secure = require("../security/secure");
test("single todo", done => {
  request("localhost:" + secure.port)
    .post("/singletodo")
    .send({
      email: "mynewaccount@yahoo.com",
      title: "todo",
      list: ["todo", "todo"]
    })
    .set("Accept", "application/json")
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
