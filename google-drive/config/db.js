const mongoose = require("mongoose");

function dbConnect() {
  mongoose.connect(process.env.MONGO_URI);
  console.log("db connected");
}
module.exports = dbConnect