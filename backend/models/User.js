const mongoose = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("user", UserSchema);

// // function validatePassword(password){
//     return (this.password == password) ? true : false;
//   };

// UserSchema.methods.comparePassword = function(candidatePassword, callback){
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
//       if(err) throw err;

//       callback(null,isMatch);
//     })
//   }

// UserSchema.pre("save",function(next){
//     var user=this;

//     if(!user.isModified("password")) return next();
