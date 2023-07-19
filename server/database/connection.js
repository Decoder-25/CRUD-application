const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB Database ${mongoose.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;