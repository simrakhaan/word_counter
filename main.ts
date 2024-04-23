#! /usr/bin/env node
import inquirer from "inquirer"


const answer = await inquirer.prompt([
    {
      name : "sentence",
      type : "input",
      message : "enter your sentence to count the word"
    }
    
])

//trim() method is usedd for remove white spaces between a words 
//split() method is used for write the each alphate seprately from word

const words = answer.sentence.trim().split(" ")
console.log(words);

// we use .lenght for print the lenght of the word
console.log(`your sentence word count is ${words.length}`);
