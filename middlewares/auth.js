const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuthenticated = (req, res, next) => {
  try {
    // 1. Get Authorization header
    const authHeader = req.header("Authorization");

    // 2. Check if header exists and starts with Bearer
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided, authorization denied"
      });
    }

    // 3. Extract token
    const token = authHeader.split(" ")[1];

    // 4. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. Attach decoded payload to request
    req.user = decoded; // { userId: ... }

    // 6. Continue to next middleware/controller
    next();

  } catch (error) {
    console.error("JWT error:", error.message);

    // Handle expired token separately
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = isAuthenticated;
