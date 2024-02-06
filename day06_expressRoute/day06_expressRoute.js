/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
  }

  const express = require('express');
  const app = express();
  
  app.get('/greet', greetHandler);
  
  const PORT = 3000; 
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  