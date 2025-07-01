//const mongoose=require('mongoose');
//mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/e-comm');

  const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // ensure .env is loaded

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ MONGO_URI is not defined in environment variables!");
  process.exit(1); // Exit if MONGO_URI is missing
}

mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
 