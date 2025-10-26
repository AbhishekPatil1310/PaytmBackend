const express = require('express');
const router = express.Router();
const Transaction = require('../models/pay.model');

// Create transaction
router.post('/', async (req, res) => {
  const { amount, receiver } = req.body;
  const transaction = new Transaction({ amount, receiver, status: 'success' });
  await transaction.save();
  res.json(transaction);
});

// Get all transactions
router.get('/', async (req, res) => {
  const transactions = await Transaction.find().sort({ date: -1 });
  res.json(transactions);
});

module.exports = router;
