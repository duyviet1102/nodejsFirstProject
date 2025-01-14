const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/receipt_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("Connected Successfully");
  } catch (e) {
    console.log("error:" + e);
  }
}

module.exports = connect;
