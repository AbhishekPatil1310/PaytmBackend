const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: Number,
  receiver: String,
  date: { type: Date, default: Date.now },
  status: String
});

module.exports = mongoose.model('Transaction', transactionSchema);
