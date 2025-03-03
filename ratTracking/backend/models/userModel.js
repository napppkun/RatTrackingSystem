const mongoose = require('mongoose');

// กำหนดโครงสร้างของ User Schema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' }, 
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('User', userSchema);
