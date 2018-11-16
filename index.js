/* Importing 3rd Party Modules */

const app = require("express")(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  cookieParser = require("cookie-parser"),
  session = require("express-session");

/* Importing User Defined Modules */

const Secure = require("./security/secure");
const User = require("./models/user");

/* Middleware */

//Initializing Body Parser for returning form data in JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Initializing Cookie Parser
app.use(cookieParser());
//Initializing Express Session
app.use(
  session({
    secret: process.env.SESSION_SECRET || Secure.key, //This key will use to check user was already logged in
    resave: false, //Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false //Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
  })
);
//Initializing Passport Module
app.use(passport.initialize());
//Using Session in Passport Module
app.use(passport.session());

/* Connection to MongoDB Database */

mongoose.connect(Secure.db, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database connected");
  }
});

/* All API For Todo  */

//This API will check already authenticated user if user is authenticated and return that user else return route /loginUser
app.get("/", (req, res) => {
  if (req.user) {
    app.render(req, res, "/", req.query);
  } else {
    res.redirect("/signin");
  }
});

//User Signup API
app.post("/signup", (req, res) => {
  var user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.save((err, user) => {
    if (err) {
      console.error("Error: ", err);
    } else {
      //res.redirect("/signin");
      console.log("Account Is Created");
    }
  });
});

/* Server will listen on the port defined in secure.port */

app.listen(Secure.port, err => {
  if (err) console.log("Error ! Server is not responding");
  else console.log("Server is running on the port " + Secure.port);
});
