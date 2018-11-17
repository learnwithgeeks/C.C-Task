/* This test will test collabrative todo list for multiple users /colabTodo route */

const request = require("supertest");
const secure = require("../security/secure");
test("single todo", done => {
  request("localhost:" + secure.port)
    .post("/colabtodo")
    .send({
      email: ["mynewaccount@yahoo.com", "sharma_vivek62@yahoo.com"],
      title: "todo",
      list: ["todo", "homework"]
    })
    .set("Accept", "application/json")
    .expect(200, { status: "Colab Todo is saved" })
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
