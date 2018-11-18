/* User JS Module is responsible for storing user information in database later which can be used for authentication */

//Importing 3rd Party Modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

//Schema will be stored in constant named as Schema
const Schema = mongoose.Schema;

//Schema of userModel for user
const userModel = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  token: String
});

//Before saving the userModel in schema encrypt user password
userModel.pre("save", function(next) {
  const user = this;
  //Encrypt user password upto 10 digits
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

//Compare user encryted password
userModel.methods.comparePassword = function(password) {
  //Return either True or False
  return bcrypt.compareSync(password, this.password);
};

//Exporting the userModel as a key User
module.exports = mongoose.model("User", userModel);
