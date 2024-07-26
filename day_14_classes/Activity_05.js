// Activity 5: Private Fields

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// Task 10: Create an instance of the account class and test the deposit and withdraw methods, logging the balance after each operation
// solution


class Account{
    #balance;

    constructor(initialBalance){
        if(initialBalance >= 0){
            this.#balance=initialBalance;
            console.log(`Account Created Successfully and Initial balance is ${initialBalance}`);
        }else{
            console.log("Initial balance should be greater than or equal to Zero(0)");
        }
    }

    deposit(amount){
        if(amount > 0){
            this.#balance+=amount;
            console.log(`Deposited amount : ${amount} and Updated Balance: ${this.#balance}`);
        }else{
            console.log("Amount should be greater than 0");
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance-=amount;
            console.log(`Withdrew amount : ${amount} and Updated Balance: ${this.#balance}`);
        }else{
            console.log('Invalid Amount OR Insufficient funds ');
        }
    }

    get getBalance(){
        console.log(`Available balance : ${this.#balance}`);
    }

}


const a1 =  new Account(1023)
a1.deposit(0)
a1.withdraw(24)

a1.getBalance