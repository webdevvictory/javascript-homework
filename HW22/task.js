/*
a)
Создай функцию-конструктор объектов Account(iban,owner, balance),
которая возвращает объект с:
- номер счета (iban)
- именем владельца (owner)
- балансом (balance)  
методами:
- **deposit**(amount) — пополнение счёта
- **withdraw**(amount) — снятие денег (если хватает баланса)
- **getBalance**() — вывод текущего баланса
 
Создайте несколько объектов счетов. Создайте массив из
счетов. Выведите информацию о всех счетах в консоль
 
b) напишите функцию, transfer, которая получает два счета,
и выполняет перевод между счетами вызывая методы deposit и
withdraw соответственно.
 
с) (чуть сложнее****************)
 В качестве результата функции transaer, в случае успешной
операции, должен cформироваться объект:
- account1 (счет списания),
- account2 (счет зачисления),
- amount (сумма)
- transactionInfo() (функция, которая выводит информацию о транзакции)  
 
Если транзакция прошла неуспешно, объект должен содержать
еще и поле error c информацией об ошибке. Естественно,
transactionInfo() должна в этом случае выводить информацию
о неуспешной транзакции. В случае, если транзакция успешна,
поля error не должно быть.
*/
// a.
function Account(iban, owner, balance) {
  this.iban = iban;
  this.owner = owner;
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance = this.balance + amount;
  };
  this.withdraw = function (amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
      return true;
    }
    return false;
  };
  this.getBalance = function() {
    console.log(this.balance);
};
}

const account1 = new Account('IL12345678', 'David', 1000)
const account2 = new Account('UA87654321', 'Alex', 3500); 
const account3 = new Account('RU12345678', 'Maria', 1950);

const accounts = [account1, account2, account3]; 

for (let i = 0; i < accounts.length; i++) {
    console.log(accounts[i].iban);
    console.log(accounts[i].owner);
    console.log(accounts[i].balance);
}

// b + c
function transfer(account1, account2, amount) {
    if (account1.withdraw(amount)) {
        account2.deposit(amount);

        const transaction = {
            account1: account1,
            account2: account2,
            amount: amount,

            transactionInfo: function() {
                console.log(
                    `Перевод ${this.amount} со счета ${this.account1.iban} на счет ${this.account2.iban} выполнен успешно`
                );
            }
        };

        return transaction;
    }

    const transaction = {
        account1: account1,
        account2: account2,
        amount: amount,
        error: "Недостаточно средств",

        transactionInfo: function() {
            console.log(
                `Перевод не выполнен: ${this.error}`
            );
        }
    };

    return transaction;
}