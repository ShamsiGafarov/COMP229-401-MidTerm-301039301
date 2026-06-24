const mongoose = require('mongoose');

const ConnectionString = 'mongodb+srv://shamsigafarov_db_user:Shamsi2026-@cluster0.62chf8c.mongodb.net/carstore';

mongoose.connect(ConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB Atlas');
});

module.exports = db;