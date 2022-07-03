// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';
// import { renderLicenseBadge } from './utils/generateMarkdown.js';
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter the title.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project? (required)',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Please enter a description.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your projects usage?'
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Is there a license associated with your project?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select all of the licenses that apply.',
        choices: ['Apache', 'Boost', 'BSD2clause', 'BSD3clause', 'CC0', 'CCA', 'CCAsa', 'EPL', 'AGPLv3','GPLv2', 'GPLv3', 'LGPLv3', 'HippocraticV2p1', 'HippocraticV3', 'IBM', 'ISC', 'MIT', 'MPL', 'ODC', 'ODbl', 'PDDL', 'PERL', 'Artistic', 'OFL', 'Unilicense', 'WTFPL', 'Zlib'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'contibuting?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'test?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter the title.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is our email address? (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the title.");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    // .then(answers => console.log(answers))
    .then(answers => {
        // renderLicenseBadge(answers);
        const pageMarkdown = generateMarkdown(answers);
        

        fs.writeFile('README.md', pageMarkdown, err => {
        if (err) throw err;
        console.log('README complete!');
    });
})


