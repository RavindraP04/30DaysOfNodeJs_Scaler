/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const { method, url, headers, body } = req;

  console.log(`[${timestamp}] ${method} ${url}`);
  console.log("Headers:", headers);
  console.log("Body:", body);

  next();
}

const express = require("express");
const app = express();

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
