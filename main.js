#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 4468;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin:",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Your Pin Code Is Correct!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select options:",
            type: "list",
            choices: ["withdraw", "check balance", "deposit"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Please select your amount!",
                type: "list",
                choices: ["1000", "3000", "5000", "10000", "15000", "20000"]
            }
        ]);
        if (amountAnswer.amount <= 10000) {
            console.log(`Your remaining balance is: ${myBalance -= amountAnswer.amount}`);
        }
        else if (amountAnswer.amount > 10000) {
            console.log(`Sorry! You have insufficient balance.
    Your current balance is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    else if (operationAnswer.operation === "deposit") {
        let depositAmountAnswer = await inquirer.prompt([
            {
                name: "deposit",
                message: "enter your deposit amount:",
                type: "number",
            }
        ]);
        if (depositAmountAnswer.deposit > 0) {
            console.log(`Your deposited amount is: ${myBalance += depositAmountAnswer.deposit}`);
        }
        else {
            console.log(`Invalid amount for deposit.`);
        }
    }
}
else {
    console.log("Your Pin Code Is Incorrect!");
}
