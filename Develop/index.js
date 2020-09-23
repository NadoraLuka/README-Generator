const inquirer = require("inquirer");
const fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown.js");
const { url } = require("inspector");

const questions = [

    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide a description",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installations to follow?",
        name: "installation"
    },
    {
        type: "list",
        message: "What type of license did you use?",
        name: "license",
        choices: [
            "GPL",
            "MIT",
            "BSD",
            "Apache 2.0",
        ]
    },
    {
        type: "input",
        message: "Enter any Usage Information",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide Contribution Guidelines",
        name: "contributing"
    },
    {
        type: "input",
        message: "How do run test Instructions.",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username.",
        name: "username"
    },
    {
        type: "input",
        message: "what is your email.",
        name: "email",
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) console.log(err);
    });
}
// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        const answersData = generateMarkdown(answers);
        writeToFile("README.md", answersData);
    });
}

// function call to initialize program
init();
