//object that contains the most commonly used licenses as keys and links to their keys as values
const licenseBadges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    BSD2clause: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    BSD3clause: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    CC0: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
    CCA: '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)',
    CCasa: '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)',
    EPL: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    AGPLv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    GPLv2: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    LGPLv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    HippocraticV2p1: ' [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)',
    HippocraticV3: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    MPL: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    ODC: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
    ODbl: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
    PDDL: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)',
    PERL: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
    Artistic: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
    OFL: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
    Unilicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    WTFPL: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
    Zlib: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
}




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    if (!license) {
        let noLicense = "";
        console.log("Aint nothing here")
        return noLicense;
    } else {
        // const badge = license;
        const renderedBadge = licenseBadges[license];
        console.log(renderedBadge);
        return renderedBadge;
    }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

}

// TODO: Create a function to generate markdown for README
export const generateMarkdown = (data) => {
    // console.log(data);
    const { title, description, ...contents} = data;
    return `
# ${title} <br>${renderLicenseBadge(contents.license)}


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

* ${contents.installation}

## Usage

* ${contents.usage}

## License 

* This application is covered under the ${contents.license} license.
* ${renderLicenseBadge(contents.license)}

## Contributing

* ${contents.contributing}

## Test

* ${contents.test}

## Questions

* If you have any questions you can find me here: <https://www.github.com/${contents.username}>
* You can also reach me here: ${contents.email}

    `;
};

