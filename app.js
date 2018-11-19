/* Importing 3rd Party Modules */

const app = require("express")(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  cors = require("cors");

/* Importing User Defined Modules */

const Secure = require("./security/secure");

/* Middleware */

//Initializing Body Parser for returning form data in JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Initializing Passport Module
app.use(passport.initialize());
//Using Cors for sending request from React JS to Node JS and vice versa
var corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"]
};
app.use(cors(corsOption));

/* Connection to MongoDB Database */

mongoose.connect(Secure.db, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database connected");
  }
});

/* All API For Todo  */

app.use("/", require("./routes/signin"));
app.use("/", require("./routes/signup"));
app.use("/", require("./routes/changePassword"));
app.use("/", require("./routes/singleTodo"));
app.use("/", require("./routes/colabTodo"));
app.use("/", require("./routes/notification"));

/* Server will listen on the port defined in Secure.port */

app.listen(Secure.port, err => {
  if (err) console.log("Error ! Server is not responding");
  else console.log("Server is running on the port " + Secure.port);
});
