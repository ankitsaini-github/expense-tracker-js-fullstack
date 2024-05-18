const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/expense', adminController.getExpense);

router.post('/add-expense', adminController.postAddExpense);

router.post('/edit-expense', adminController.postEditExpense);

router.post('/delete-expense', adminController.postDeleteExpense);

module.exports = router;
