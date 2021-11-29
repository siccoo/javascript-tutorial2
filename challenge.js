'use strict';

// Create an Expense tracker

// const account = {
//     name: 'Miko Laka',
//     expenses: [],
//     income: [],
//     addExpense: function (description, amount) {
//         this.expenses.push({
//             description: description,
//             amount: amount
//         })
//     },

//     addIncome: function (description, amount){
//         this.income.push({
//             description: description,
//             amount: amount        
//         })
//     },
//     getAccountSummary: function(){
//         let totalExpenses = 0 

//         this.expenses.forEach(function (expense, incomes){
//             totalExpenses = totalExpenses + expense.amount - incomes.amount
//         })
//         return `${this.name} has $${totalExpenses} in expenses.`
//     }
// }

// localStorage.setItem('location', 'Philadelphia');

// console.log(localStorage.getItem('location'))

// account.addExpense('Rent', 1000);
// account.addExpense('Rent', 250);
// account.addIncome('Job', 2500)
// console.log(account.getAccountSummary())
// if (myVar === 0) {

// } else if (myVar === 1) {

// } else if (myVar === 2) {

// }

var sum;

for (var i=0;i<10;i++){ 
  sum = sum + 1;
}

console.log(sum);
