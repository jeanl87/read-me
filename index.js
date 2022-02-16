// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },

  {
    type: "input",
    name: "title",
    message: "What is your project name?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license will your project have?",
    choices: ["apache-2.0", "cc", "isc", "none"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "command",
    message: "What command should be run to run tests",
  },
  {
    type: "input",
    name: "repo",
    message: "What does the user need to know about the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    writeToFile("readme.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
