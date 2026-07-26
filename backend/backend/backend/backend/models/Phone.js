const mongoose = require("mongoose");

const PhoneSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  display: String,
  processor: String,
  ram: String,
  storage: String,
  camera: String,
  battery: String,
  os: String,
  price: Number,
  image: String,
  rating: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Phone", PhoneSchema);