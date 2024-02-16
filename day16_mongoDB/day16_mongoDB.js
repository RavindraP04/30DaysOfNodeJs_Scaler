const mongoose = require('mongoose');


function connectToMongoDB() {
  const mongoURI = 'mongodb://localhost/mydatabase';

  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  db.once('open', () => {
    console.log('Successfully connected to MongoDB');
  });
}

connectToMongoDB();
