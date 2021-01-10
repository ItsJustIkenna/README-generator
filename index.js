// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generatedMarkdowns");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter project title",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a license",
    name: "license",
    choices: ["BSD", "GPL", "ISC", "MIT", "None"],
  },
  {
    type: "input",
    message: "Enter tests",
    name: "test",
  },
  {
    type: "input",
    message: "Enter questions",
    name: "questions",
  },
  {
    type: "input",
    message: "Enter contributors",
    name: "contributors",
  },
  {
    type: "input",
    message: "Enter GitHub username",
    name: "github",
  },
  {
    type: "input",
    message: "Enter email",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(response) {
    writeToFile("README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
