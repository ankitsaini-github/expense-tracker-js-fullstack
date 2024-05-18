const Expense = require('../models/expense');

// get all expense
exports.getExpense = (req, res, next) => {
  Expense.findAll().then(result => {
    // console.log('ALL EXPENSE ======= ',result)
    res.send(result);
  }).catch(err => console.log(err));
};

// add expense
exports.postAddExpense = (req, res, next) => {
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;
  Expense.create({
    amount: amount,
    description: description,
    category: category
  }).then(result => {
    console.log(result);
    res.send(result);
  }).catch(err => console.log(err))
};

//edit expense
exports.postEditExpense = (req, res, next) => {
  const id = req.body.id;
  const updatedAmount = req.body.amount;
  const updatedDescription = req.body.description;
  const updatedCategory = req.body.category;

  Expense.findOne({ where: { id: id } }).then(expense => {
    expense.amount = updatedAmount;
    expense.description = updatedDescription;
    expense.category = updatedCategory;
    return expense.save();
  }).then(()=>{
    res.send('Expense Updated successfully');
  }).catch(err => console.log(err))
};

// delete expense
exports.postDeleteExpense = (req, res, next) => {
  const id = req.body.id;
  Expense.destroy({ where: { id: id } }).then(result=>res.send('Expense Deleted')).catch(err=>console.log(err));
};
