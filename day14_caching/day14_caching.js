const NodeCache = require("node-cache");

const cache = new NodeCache();

function cachingMiddleware(req, res, next) {
  const key = req.originalUrl; 
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    res.send(cachedResponse);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      cache.set(key, body, CACHE_EXPIRATION_TIME_SECONDS);
      res.sendResponse(body);
    };
    next();
  }
}

const CACHE_EXPIRATION_TIME_SECONDS = 300;
const express = require("express");
const app = express();
app.use(cachingMiddleware);
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
