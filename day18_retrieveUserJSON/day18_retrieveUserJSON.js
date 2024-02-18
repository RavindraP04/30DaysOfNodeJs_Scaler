const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

const app = express();
const port = 3000;

app.get('/users', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.error('Error retrieving users:', err);
      res.status(500).json({ error: 'Error retrieving users' });
    } else {
      res.json(users);
    }
  });
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
