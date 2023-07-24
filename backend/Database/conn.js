const mongoose = require("mongoose");
const DB = process.env.DATABASE;

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

connectDB();
