// TODO: Include packages needed for this application
// inquirer and fs
// const will not be redeclared
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
// typical naming convention when declaring modules
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    // create a list of questions, inquirer documentation
    // project title
    type: "input",
    name: "title",
    message: "Please enter your project title: ",
    // return true if the value is valid
    validate: function (input) {
      // projectTitle parameter
      // console.log(input);
      // if statement, or you can clarify one boolean return
      if (input) {
        return true;
      } else {
        return false;
      }
    },
  },

  // project description
  {
    type: "input",
    name: "description",
    message: "Enter your description: ",
    validate: function (userDesc) {
      if (userDesc) {
        return true;
      }
      return false;
    },
  },
  // installation instructions
  {
    type: "input",
    message: "Provide installation instructions for your README: ",
    name: "installation",
    // default is expected to be boolean if used
    validate: function (instructions) {
      if (instructions) {
        return true;
      }
      return false;
    },
  },
  // usage information
  {
    type: "input",
    message: "Provide usage information for your README: ",
    name: "usage",
    validate: function (usage) {
      if (usage) {
        return true;
      }
      return false;
    },
  },
  // specify license
  {
    // https://choosealicense.com/licenses/
    // list vs raw list ? ask elena
    type: "list",
    message: "What license would you like?",
    // wait what
    choices: ["MIT", "apache", "mozilla", "no license"],
    name: "license",
  },

  // contributing
  {
    type: "input",
    message: "Provide contributions for your README: ",
    name: "contributions",
    // default is expected to be boolean if used
    validate: function (contribute) {
      if (contribute) {
        return true;
      }
      return false;
    },
  },
  // tests
  {
    type: "input",
    message: "Provide tests for your README: ",
    name: "tests",
    // default is expected to be boolean if used
    validate: function (test) {
      if (test) {
        return true;
      }
      return false;
    },
  },

  // github username and email
  {
    type: "input",
    message: "Please enter your GitHub username: ",
    name: "username",
    validate: function (usernameInput) {
      if (usernameInput) {
        return true;
      }
      return false;
    },
  },
  {
    type: "input",
    message: "Please enter your email address: ",
    name: "email",
    validate: function (email) {
      // stack overflow this
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
        email
      );
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // write the writeFile and pass back the information you store from the user
  // file, data, and callback
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("success");
  });
  // console.log(fileName);
}

// do I write to a text file? I am missing something
// fs.writeFile(`./${}`, , err =>{
// err parameter, consolel.log is not working
// if (err) {
//   return console.log(err);
// }
// console.log(`Success!`);

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // writeToFile has the callback function, do not do it again
    writeToFile("./utils/README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();

// use fs to read and write modules
// fs is a core module
// choose file to read to
// block code flow, this is not asychronous
// reading binary
// read from the first file
// var index = fs.readFileSync("index.js", "utf8");
// asychronous, need a callback function to fire
// do you need to read to a text file
// pass the data read to the function without blocking the code
// still fires while data is READ!! nice.. asychronous is awesome, nonblocking code
// fire callback once this is read completely, write file once this is read
// fs.readFile("index.js", 'utf8', function(err, data){
//   fs.writeFile('writeMe.txt', data);
// ));
// store the results in a variable
// console.log(index);
// sychronous file, decide where to write this file
// fs.writeFileSync();
