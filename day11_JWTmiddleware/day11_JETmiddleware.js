const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

function authenticationMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "password");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.use(authenticationMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});