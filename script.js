const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
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

function add_transaction(e){
  e.preventDefault()

  if(text.value.trim() === '' || amount.value.trim() === ''){
    alert('please add a text and amount')
  }else{
    const transaction = {
      id: generate_id(),
      text: text.value,
      amount: +amount.value
    }
    transactions.push(transaction)
    add_transaction_dom(transaction)
    update_values()
    text.value=''
    amount.value=''
  }
}

function generate_id(){
  return Math.floor(Math.random() * 100000000)
}

// add transactions to dom list

function add_transaction_dom(transaction){
  // get sign
  const sign = transaction.amount < 0 ? '-' : '+'
  const item = document.createElement('li')
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')
  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn" onclick='remove_transaction(${transaction.id})'>z</button>`
  list.appendChild(item)
}

function update_values(){
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2)
  const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2)
  const expense = (amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0) * -1 ).toFixed(2)
  balance.innerText = `$${total}`
  money_plus.innerText = `$${income}`
  money_minus.innerText = `$${expense}`
}

function remove_transaction(id){
  transactions = transactions.filter(transaction => transaction.id != id)
  init()
}

function init(){
  list.innerHTML = ''
  transactions.forEach(add_transaction_dom)
  update_values()
}
init()

form.addEventListener('submit',add_transaction)