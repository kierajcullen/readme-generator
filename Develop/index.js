// TODO: Include packages needed for this application
// inquirer and fs
// const will not be redeclared
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    // create a list of questions, inquirer documentation
    type: "input",
    name: "title",
    message: "Please enter your project title: ",
    // return true if the value is valid
    validate: function (projectTitle) {
      // projectTitle parameter
      console.log(projectTitle);
      // if statement, or you can clarify one boolean return
      if (projectTitle) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "description",
    message: "Would you like to include a description section?",
    default: true,
  },
  {
    type: "input",
    name: "userDescription",
    message: "Enter your description: ",
    validate: function (userDesc) {
      if (userDesc) {
        return true;
      }
      return false;
    },
    // return true or false depending on whether or not this question should be asked
    when: function (confirm) {
      return confirm.desc;
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
