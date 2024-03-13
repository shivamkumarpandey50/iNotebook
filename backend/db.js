const mongoose = require("mongoose");

const mongoURI =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5";
// "mongodb://localhost:27017/mydb";
const connectToMongo = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("Connected to MongoDB!");
  });
};
module.exports = connectToMongo;
