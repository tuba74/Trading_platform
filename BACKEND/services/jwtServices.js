require('dotenv').config()
const jwt = require("jsonwebtoken");

// Function to generate a JWT
exports.generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10m" });
};


exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};