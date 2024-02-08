const express = require("express");
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).send('Error: Parameter "number" must be a positive integer');
});

function positiveIntegerHandler(req, res, next) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    res.send('Success: Parameter "number" is a positive integer');
  } else {
    const err = new Error('Parameter "number" must be a positive integer');
    next(err);
  }
}

app.get("/positive", positiveIntegerHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
