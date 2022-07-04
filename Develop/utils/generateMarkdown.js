//object that contains the most commonly used licenses as keys and links to their keys as values
const licenseBadges = {
    'Apache 2.0 License': ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'https://opensource.org/licenses/Apache-2.0', 'Apache 2.0 License'],
    'Boost Software License 1.0': ['[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 'https://www.boost.org/LICENSE_1_0.txt', 'Boost Software License 1.0'],
    'BSD 2-Clause License': ['[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)', 'https://opensource.org/licenses/BSD-2-Clause', 'BSD 2-Clause License'],
    'BSD 3-Clause License': ['[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', 'https://opensource.org/licenses/BSD-3-Clause', 'BSD 3-Clause License'],
    'Creative Commons Zero Universal License': ['[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)', 'http://creativecommons.org/publicdomain/zero/1.0/', 'Creative Commons Zero Universal License'],
    'Creative Commons Attribution 4.0 International License': ['[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)', 'https://creativecommons.org/licenses/by/4.0/', 'Creative Commons Attribution 4.0 International License'],
    'Creative Commons Attribution-ShareAlike 4.0 International License': ['[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)', 'https://creativecommons.org/licenses/by-sa/4.0/', 'Creative Commons Attribution-ShareAlike 4.0 International License'],
    'Eclipse Public License v1.0': ['[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', 'https://opensource.org/licenses/EPL-1.0', 'Eclipse Public License 1.0'],
    'GNU AGPL v3.0 License': ['[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', 'https://www.gnu.org/licenses/agpl-3.0', 'GNU AGPL v3.0 License'],
    'GNU GPL v2.0 License': ['[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)', 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html', 'GNU GPL v2.0 License'],
    'GNU GPL v3.0 License': ['[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'https://www.gnu.org/licenses/gpl-3.0', 'GNU GPL v3.0 License'],
    'GNU LGPL v3.0 License': ['[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', 'https://www.gnu.org/licenses/lgpl-3.0', 'GNU LGPL v3.0 License'],
    'Hippocratic License v2.1': [' [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev/version/2/1/license/)', 'https://firstdonoharm.dev/version/2/1/license/', 'Hippocratic License v2.1'],
    'Hippocratic License v3.0': ['[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)', 'https://firstdonoharm.dev', 'Hippocratic License v3.0'],
    'IBM Public License v1.0': ['[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)', 'https://opensource.org/licenses/IPL-1.0', 'IBM Public License Version 1.0'],
    'ISC License': ['[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)', 'https://opensource.org/licenses/ISC', 'ISC License'],
    'MIT License': ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'https://opensource.org/licenses/MIT', 'MIT License'],
    'Mozilla Public License v2.0': ['[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 'https://opensource.org/licenses/MPL-2.0', 'Mozilla Public License 2.0'],
    'Open Data Commons Attribution License': ['[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)', 'https://opendatacommons.org/licenses/by/', 'Open Data Commons Attribution License'],
    'Open Data Commons Open Database License': ['[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)', 'https://opendatacommons.org/licenses/odbl/', 'Open Data Commons Open Database License'],
    'Open Data Commons Public Domain Dedications and License': ['[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)', 'https://opendatacommons.org/licenses/pddl/', 'Open Data Commons Public Domain Dedication and License'],
    'PERL License': ['[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)', 'https://opensource.org/licenses/Artistic-2.0', 'Perl License'],
    'Artistic License v2.0': ['[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)', 'https://opensource.org/licenses/Artistic-2.0', 'Artistic License v2.0'],
    'SIL Open Font License 1.1': ['[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)', 'https://opensource.org/licenses/OFL-1.1', 'SIL Open Font License 1.1'],
    'Unlicense': ['[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', 'http://unlicense.org/', 'Unlicense'],
    'Do What the F*** You Want to Public License': ['[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)', 'http://www.wtfpl.net/about/', 'Do What the F*** You Want to Public License'],
    'Zlib/libpng License': ['[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)', 'https://opensource.org/licenses/Zlib', 'Zlib/libpng License']
}



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    if (!license) {
        let noLicense = "";
        return noLicense;
    } else {
        console.log(licenseBadges[license][0]);
        const renderedBadge = licenseBadges[license][0];
        return renderedBadge;
    }
};
// TODO: Create a function that returns the license link
// If there is no license, it returns '* None'
const renderLicenseLink = license => {
    if (!license) {
        let noLicense = "* None";
        return noLicense;
    } else {
        const licenseLink = licenseBadges[license][1];
        return "* This application is covered under the <a href='" + licenseLink + "'>" + license + "</a>."
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
    
}



//function that displays a screenshot in the 'description' section.  If there is no screenshot it returns an empty string
const renderDescriptionScreenshot = (title, screenshot) => {
    if (!screenshot) {
        let noScreenshot = "";
        return noScreenshot;
    } else {
        console.log("![" + title + "](" + screenshot + ")")
        return "![" + title + "](" + screenshot + ")"
    }
}





//function that displays a screenshot in the 'Installation' section.  If there is no screenshot it returns an empty string
const renderInstallationScreenshot = (title, screenshot) => {
    if (!screenshot) {
        let noScreenshot = "";
        return noScreenshot;
    } else {
        console.log("![" + title + "](" + screenshot + ")")
        return "![" + title + "](" + screenshot + ")"
    }
}





//function that displays a screenshot in the 'Usage' section.  If there is no screenshot it returns an empty string
const renderUsageScreenshot = (title, screenshot) => {
    if (!screenshot) {
        let noScreenshot = "";
        return noScreenshot;
    } else {
        console.log("![" + title + "](" + screenshot + ")")
        return "![" + title + "](" + screenshot + ")"
    }
}





//function that displays a screenshot in the 'test' section.  If there is no screenshot it returns an empty string
const renderTestScreenshot = (title, screenshot) => {
    if (!screenshot) {
        let noScreenshot = "";
        return noScreenshot;
    } else {
        console.log("![" + title + "](" + screenshot + ")")
        return "![" + title + "](" + screenshot + ")"
    }
}

// TODO: Create a function to generate markdown for README
export const generateMarkdown = (data) => {
    const { title, description, ...contents} = data;
    return `
# ${title} <br>${renderLicenseBadge(contents.license)}


## Description: 

* ${description}

${renderDescriptionScreenshot(title, contents.descriptionScreenshot)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation

* ${contents.installation}

${renderInstallationScreenshot(title, contents.installationScreenshot)}

Back to [Table of Contents](#table-of-contents)

## Usage

* ${contents.usage}

${renderUsageScreenshot(title, contents.usageScreenshot)}

Back to [Table of Contents](#table-of-contents)

## License 

${ renderLicenseLink(contents.license) }

Back to [Table of Contents](#table-of-contents)


## Contributing

* ${contents.contributing}

Back to [Table of Contents](#table-of-contents)

## Test

* ${contents.test}

${renderTestScreenshot(title, contents.testScreenshot)}

Back to [Table of Contents](#table-of-contents)

## Questions

* If you have any questions you can find me here: <https://www.github.com/${contents.username}>
* You can also reach me here: ${contents.email}

Back to [Table of Contents](#table-of-contents)

    `;
};

