// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const readmeDataArgs = process.argv.slice(2);

const [project, description] = readmeDataArgs


// const printReadmeData = readmeDataArr => {
//     readmeDataArr.forEach((readmeItem) => console.log(readmeItem));
// };


// printReadmeData(readmeDataArgs);

const generateReadMe = (project, description) => {
    return `
# ${project}

## Description: 

* ${description}

    `;
} ;

fs.writeFile('README.md', generateReadMe(project, description), err => {
    if (err) throw err;
    console.log('README complete!');
});