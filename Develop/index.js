// TODO: Include packages needed for this application
// import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const readmeDataArgs = process.argv.slice(2, process.argv.length);

const printReadmeData = readmeDataArr => {
    readmeDataArr.forEach((readmeItem) => console.log(readmeItem));
};


printReadmeData(readmeDataArgs);