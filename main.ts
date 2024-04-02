#! /usr/bin/env node

import inquirer from "inquirer";
console.log("WELCOME TO OUR ATM MACHINE!!")

console.log("Please Insert your card here!")

let myBalance = 10000;
let myPin = 4468;


let languageAnswer = await inquirer.prompt(
    [
        {
            name: "language",
            message: "Select the language",
            type: "list",
            choices:["English", "Urdu"]

        }
    ]
)
if(languageAnswer.language === "English"){
    console.log("OK!");

    let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter 4-digit your ATM-Pin:",
            type: "number",

        }
    ]
);

if(pinAnswer.pin === myPin){
    console.log("Your Pin Code Is Correct!")

    let operationAnswer = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select options:",
                type: "list",
                choices: ["withdraw", "check balance", "deposit"]

            }
        ]
);

if (operationAnswer.operation === "withdraw"){
    let amountAnswer = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Please select your amount!",
                type: "list",
                choices: ["1000", "3000", "5000", "10000", "15000", "20000"]

            }
        ]
)
if (amountAnswer.amount <= 10000){
   console.log(`Your remaining balance is: ${myBalance -= amountAnswer.amount}`);
} else if(amountAnswer.amount > 10000){
    console.log(`Sorry! You have insufficient balance.
    Your current balance is: ${myBalance}`);
}
console.log("Please collect the cash!");
let transactionAnswer = await inquirer.prompt(
    [
        {
            name: "transaction",
            message: "For additional transaction",
            type: "list",
            choices: ["Yes", "NO"]

        }
    ]
)
if(transactionAnswer.transaction === "Yes"){
    if (operationAnswer.operation === "withdraw"){
        let amountAnswer = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Please select your amount!",
                    type: "list",
                    choices: ["1000", "3000", "5000", "10000", "15000", "20000"]
    
                }
            ]
    )
    if (amountAnswer.amount <= 10000){
       console.log(`Your remaining balance is: ${myBalance -= amountAnswer.amount}`);
    } else if(amountAnswer.amount > 10000){
        console.log(`Sorry! You have insufficient balance.
        Your current balance is: ${myBalance}`);
    }
    console.log("Please collect the cash!");
}

} else {
    console.log("Thankyou for your transaction!")
} 
} else if(operationAnswer.operation === "check balance"){
    console.log(`Your current balance is: ${myBalance}`);
} else if(operationAnswer.operation === "deposit"){

    let depositAmountAnswer = await inquirer.prompt(
        [
            {
                name: "deposit",
                message:"enter your deposit amount:",
                type: "number",

            }
        ]
)
if (depositAmountAnswer.deposit > 0){
    console.log(`Your deposited amount is: ${myBalance += depositAmountAnswer.deposit}`);
} else{
    console.log(`Invalid amount for deposit.`)
}
}
let receiptAnswer = await inquirer.prompt(
    [
        {
            name: "receipt",
            message: "Select Yes if you want printed receipt or click No",
            type: "list",
            choices: ["Yes", "No"]

        }
    ]
)
if(receiptAnswer.receipt === "Yes"){
    console.log("Thankyou, Please collect your receipt here!");
} else {
    console.log("Okay,Thankyou!")
}
} else{
    console.log("Your Pin Code Is Incorrect!");
} 
} else{
    console.log("This language is not yet available.")
}
