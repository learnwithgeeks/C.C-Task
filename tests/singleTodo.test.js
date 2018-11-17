/* This test will test single todo list of user /singleTodo route */

const request = require("supertest");
const secure = require("../security/secure");
test("single todo", done => {
  request("localhost:" + secure.port)
    .post("/singletodo")
    .send({ email: "mynewaccount@yahoo.com", title: "todo", list: "todo" })
    .set("Accept", "application/json")
    .expect(200, { status: "Single Todo is saved" })
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
