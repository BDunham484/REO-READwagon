//object that contains the most commonly used licenses to provide links to badges and license details
const licenseBadgesObj = {
    'Apache 2.0 License': ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'https://opensource.org/licenses/Apache-2.0'],
    'Boost Software License 1.0': ['[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 'https://www.boost.org/LICENSE_1_0.txt'],
    'BSD 2-Clause License': ['[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)', 'https://opensource.org/licenses/BSD-2-Clause'],
    'BSD 3-Clause License': ['[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', 'https://opensource.org/licenses/BSD-3-Clause'],
    'Creative Commons Zero Universal License': ['[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)', 'http://creativecommons.org/publicdomain/zero/1.0/'],
    'Creative Commons Attribution 4.0 International License': ['[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)', 'https://creativecommons.org/licenses/by/4.0/'],
    'Creative Commons Attribution-ShareAlike 4.0 International License': ['[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)', 'https://creativecommons.org/licenses/by-sa/4.0/'],
    'Eclipse Public License v1.0': ['[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', 'https://opensource.org/licenses/EPL-1.0'],
    'GNU AGPL v3.0 License': ['[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', 'https://www.gnu.org/licenses/agpl-3.0'],
    'GNU GPL v2.0 License': ['[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)', 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'],
    'GNU GPL v3.0 License': ['[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'https://www.gnu.org/licenses/gpl-3.0'],
    'GNU LGPL v3.0 License': ['[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', 'https://www.gnu.org/licenses/lgpl-3.0'],
    'Hippocratic License v2.1': [' [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev/version/2/1/license/)', 'https://firstdonoharm.dev/version/2/1/license/'],
    'Hippocratic License v3.0': ['[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)', 'https://firstdonoharm.dev'],
    'IBM Public License v1.0': ['[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)', 'https://opensource.org/licenses/IPL-1.0'],
    'ISC License': ['[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)', 'https://opensource.org/licenses/ISC'],
    'MIT License': ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'https://opensource.org/licenses/MIT'],
    'Mozilla Public License v2.0': ['[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 'https://opensource.org/licenses/MPL-2.0'],
    'Open Data Commons Attribution License': ['[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)', 'https://opendatacommons.org/licenses/by/'],
    'Open Data Commons Open Database License': ['[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)', 'https://opendatacommons.org/licenses/odbl/'],
    'Open Data Commons Public Domain Dedications and License': ['[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)', 'https://opendatacommons.org/licenses/pddl/'],
    'PERL License': ['[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)', 'https://opensource.org/licenses/Artistic-2.0'],
    'Artistic License v2.0': ['[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)', 'https://opensource.org/licenses/Artistic-2.0'],
    'SIL Open Font License 1.1': ['[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)', 'https://opensource.org/licenses/OFL-1.1'],
    'Unlicense': ['[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', 'http://unlicense.org/'],
    'Do What the F*** You Want to Public License': ['[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)', 'http://www.wtfpl.net/about/'],
    'Zlib/libpng License': ['[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)', 'https://opensource.org/licenses/Zlib']
}





// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    if (!license) {
        let noLicense = "";
        return noLicense;
    } else {
        const badge = licenseBadgesObj[license][0];
        return badge;
    };
};





// TODO: Create a function that returns the license link
// If there is no license, it returns '* None'
const renderLicenseLink = license => {
    if (!license) {
        let noLicense = "";
        return noLicense;
    } else {
        const licenseLink = licenseBadgesObj[license][1];
        return "* This application is covered under the <a href='" + licenseLink + "'>" + license + "</a>."
    }
}





// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
    if (!license) {
        let noLicense = "";
        return noLicense;
    } else {
        return "## License"
    }
}





//function that returns the 'table of contents' link if there is a license provided.
const renderTocLink = license => {
    if (!license) {
        let noLicense = "";
        return noLicense;
    } else {
        return "Back to [top of page](# )"
    }
}





//function that return the license link in the table of contents if a license is provided
const renderTableLink = license => {
    if (!license) {
        let noLicense = "";
        return noLicense;
    } else {
        return "- [License](#license)"
    }
}





//function to add installation steps
const renderInstallationSteps = data => {
    if (!data) {
        let noData = "";
        return noData;
    } else if (data.includes(",")) {
        return "* " + data.split(',').join("\n* ")
    } else {
        return "* " + data;
    }  
};




//function to add extra contributors
const renderAdditionalContributor = data => {
    if (!data) {
        let noData = "";
        return noData;
    } else if (data.includes(",")) {
        return "* " + data.split(',').join("\n* ")
    } else {
        return "* " + data;
    }  
};





//function that displays a screenshot in the 'description' section.  If there is no screenshot it returns an empty string
const renderDescriptionScreenshot = (title, screenshot) => {
    if (!screenshot) {
        let noScreenshot = "";
        return noScreenshot;
    } else {
        return "![" + title + "](" + screenshot + ")"
    }
}





//function that displays a user provided link in the 'description' section.  If there is no link it returns an empty string
const renderSiteLink = (link) => {
    if (!link) {
        let noLink = "";
        return noLink;
    } else {
        return "* <a href='" + link + "'>" + link + "</a>"
    }
}





//function that displays a screenshot in the 'Installation' section.  If there is no screenshot it returns an empty string
const renderInstallationScreenshot = (title, screenshot) => {
    if (!screenshot) {
        let noScreenshot = "";
        return noScreenshot;
    } else {
        return "![" + title + "](" + screenshot + ")"
    }
}





//function that displays a screenshot in the 'Usage' section.  If there is no screenshot it returns an empty string
const renderUsageScreenshot = (title, screenshot) => {
    if (!screenshot) {
        let noScreenshot = "";
        return noScreenshot;
    } else {
        return "![" + title + "](" + screenshot + ")"
    }
}





//function that displays a screenshot in the 'test' section.  If there is no screenshot it returns an empty string
const renderTestScreenshot = (title, screenshot) => {
    if (!screenshot) {
        let noScreenshot = "";
        return noScreenshot;
    } else {
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

${renderSiteLink(contents.projectLink)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${ renderTableLink(contents.confirmLicense) }
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation

${renderInstallationSteps(contents.installation)}

${renderInstallationScreenshot(title, contents.installationScreenshot)}

Back to [top of page](# )

## Usage

* ${contents.usage}

${renderUsageScreenshot(title, contents.usageScreenshot)}

Back to [top of page](# )

${ renderLicenseSection(contents.confirmLicense) }

${ renderLicenseLink(contents.license) }

${ renderTocLink(contents.confirmLicense) }


## Code Contributors

#### Made with ❤️ by:

* ${contents.contributors}

${ renderAdditionalContributor(contents.additionalContributors) }

Back to [top of page](# )

## Contributing

${contents.contributing}

## Test

* ${contents.test}

${renderTestScreenshot(title, contents.testScreenshot)}

Back to [top of page](# )

## Questions?

* If you have any questions you can find me here: <https://www.github.com/${contents.username}>
* You can also reach me here: ${contents.email}

Back to [top of page](# )

    `;
};

