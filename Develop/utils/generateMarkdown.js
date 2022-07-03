// TODO: Create a function that returns a license badge based on which license is passed in

import { json } from "stream/consumers";

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
export const generateMarkdown = data => {
    console.log(data);
    const { title, description, ...contents} = data;
    return `
# ${title}

## Description: 

* ${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation

* ${contents.installation};

## Usage

* ${contents.usage};

## License 

* ${contents.license};

## Contributing

* ${contents.contributing};

## Test

* ${contents.test};

## Questions

* ${contents.questions};

    `;
};

