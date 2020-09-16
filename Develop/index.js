const fs = require("fs");
const { prompt } = require("inquirer");
const path= require("path");
const generateMarkdown= require("./generateMarkdown");

// question to generate README
const question = [
    {
        type: "input",
        message: "what is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {  
        type: "input",
        message: "Provide instructions for use.",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Select license",
        name: "license",
        choices: []
    }            
]             

console.log('PLEASE BEGIN BY ANSWERING THE FIRST QUESTION');

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(); 
}

// function to initialize program
function init() {
    writeToFile();
}

// function call to initialize program
init();
