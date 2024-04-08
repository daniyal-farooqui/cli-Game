#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 2);
const answers = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "please guess a number 1-6:",
    }
]);
if (answers.UserGuessNumber === randomNumber) {
    console.log("congratulation! you guessed right number.");
}
else {
    console.log("you guessed a wrong number");
}
