// TODO: Include packages needed for this application
import inquirer from 'inquirer';
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// const pageMarkdwon = generateMarkdown(project, description);


// fs.writeFile('README.md', pageMarkdwon, err => {
//     if (err) throw err;
//     console.log('README complete!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));