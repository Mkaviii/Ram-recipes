const jwt = require('jsonwebtoken');
require('dotenv').config();

const isAuthenticated = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.header('Authorization');
  const token = authHeader?.replace('Bearer ', '').trim(); // remove spaces

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach payload to request
    next();
  } catch (err) {
    // Distinguish expired token for better debugging
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    console.error('JWT error:', err.message);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = isAuthenticated;
