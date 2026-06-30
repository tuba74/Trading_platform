const { verifyToken } = require("../services/jwtServices");

// Middleware to protect routes
exports.authMiddleware = (req, res, next) => {
 let token;
  if (!token && req.cookies) {
    token = req.cookies.token;
  }
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {

    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    // If token is invalid or expired
    res.status(401).json({ message: "Invalid or expired token" });
  }
};