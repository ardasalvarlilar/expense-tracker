const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money_minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dummy_transactions = [
  {id:1, text:'Flower',amount: -20},
  {id:2, text:'Salary',amount: 300},
  {id:3, text:'Book',amount: -10},
  {id:4, text:'Camera',amount: 150},
]
let transactions = dummy_transactions

// add transactions to dom list

function add_transaction_dom(transaction){
  // get sign
  const sign = transaction.amount < 0 ? '-' : '+'
  const item = document.createElement('li')
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')
  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">z</button>`
  list.appendChild(item)
}

function init(){
  list.innerHTML = ''
  transactions.forEach(add_transaction_dom)
}
init()