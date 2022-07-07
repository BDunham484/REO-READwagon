// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';





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
        type: 'confirm',
        name: 'confirmDescriptionScreenshot',
        message: 'Would you like to provide a screenshot to the "Description" section?',
        default: false
    },
    {
        type: 'input',
        name: 'descriptionScreenshot',
        message: 'Please enter the relative path of your screenshot.',
        when: ({ confirmDescriptionScreenshot }) => {
            if (confirmDescriptionScreenshot) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLink',
        message: 'Would you like to provide a link?',
        default: false
    },
    {
        type: 'input',
        name: 'projectLink',
        message: 'Please enter your link',
        when: ({ confirmLink  }) => {
            if (confirmLink) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (separate installation steps by a comma.)'
    },
    {
        type: 'confirm',
        name: 'confirmInstallationScreenshot',
        message: 'Would you like to provide a screenshot to the "Installation" section?',
        default: false
    },
    {
        type: 'input',
        name: 'installationScreenshot',
        message: 'Please enter the relative path of your screenshot.',
        when: ({ confirmInstallationScreenshot }) => {
            if (confirmInstallationScreenshot) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your projects usage?'
    },
    {
        type: 'confirm',
        name: 'confirmUsageScreenshot',
        message: 'Would you like to provide a screenshot to the "Usage" section?',
        default: false
    },
    {
        type: 'input',
        name: 'usageScreenshot',
        message: 'Please enter the relative path of your screenshot.',
        when: ({ confirmUsageScreenshot }) => {
            if (confirmUsageScreenshot) {
                return true;
            } else {
                return false;
            }
        }
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
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Creative Commons Zero Universal License', 'Creative Commons Attribution 4.0 International License', 'Creative Commons Attribution-ShareAlike 4.0 International License', 'Eclipse Public License v1.0', 'GNU AGPL v3.0 License','GNU GPL v2.0 License', 'GNU GPL v3.0 License', 'GNU LGPL v3.0 License', 'Hippocratic License v2.1', 'Hippocratic License v3.0', 'IBM Public License v1.0', 'ISC License', 'MIT License', 'Mozilla Public License v2.0', 'Open Data Commons Attribution License', 'Open Data Commons Open Database License', 'Open Data Commons Public Domain Dedications and License', 'PERL License', 'Artistic License v2.0', 'SIL Open Font License 1.1', 'Unlicense', 'Do What the F*** You Want to Public License', 'Zlib/libpng License'],
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
        name: 'contributors',
        message: 'Contributors? (at least one is required)',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log("Please enter at least one contributor.");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContributors',
        message: 'Would you like to provide additional contributors?',
        default: false
    },  
    {
        type: 'input',
        name: 'additionalContributors',
        message: 'Additional Contributors? (Enter names on one line separated by commas)',
        when: ({ confirmContributors }) => {
            if (confirmContributors) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How could one contribute to your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'test?'
    },
    {
        type: 'confirm',
        name: 'confirmTestScreenshot',
        message: 'Would you like to provide a screenshot to the "Test" section?',
        default: false
    },
    {
        type: 'input',
        name: 'testScreenshot',
        message: 'Please enter the relative path of your screenshot.',
        when: ({ confirmTestScreenshot }) => {
            if (confirmTestScreenshot) {
                return true;
            } else {
                return false;
            }
        }
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
const writeToFile = (data) => { 
    fs.writeFile('./dist/README.md', data, err => {
        if (err) throw err;
        console.log('/////////////////README.md Complete!!! Check the `dist` directory for results!//////////////////');
    });
};





// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
};





// Function call to initialize app
init()
    .then(answers => {
        const pageMarkdown = generateMarkdown(answers);
        writeToFile(pageMarkdown);  
})
.catch(err => {
    console.log(err);
});



