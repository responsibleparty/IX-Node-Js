const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What command do you run to install? the app"
    },
    {
        type: "input",
        name: "usage",
        message: "What is it used for?"
    },
    {
        type: "list",
        name: "license",
        choices: [
            "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        message: "What license does this app have?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What is your GitHub username?"

    },
    {
        type: "input",
        name: "test",
        message: "How do you test the app?"
    },
    {
        type: "input",
        name: "question",
        message: "Enter your email address:"
    }
];

inquirer.prompt([...questions]).then((answers) =>{
    fs.writeFile("read.md", generateMarkdown(answers), (err) =>{
        if (err) throw err;
        console.log("Read me is made!");
    })
})
















// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
