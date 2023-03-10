/*
// TODO: Create a function that returns a license badge based on which license is passed in - DONE
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link - done, added to badge as a button
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README - ?? 
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README - DOne 
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
*/

/*** Starter Code ABOVE &&& Personal Code BELOW **************************/



function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  let licenseBadge;

  switch (license) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPLv3':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'ISC':
      licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    default:
      licenseBadge = '';
  }

  return licenseBadge;
}



//Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  return `
# ${data.title} © 

${licenseBadge}

## Description

${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.installation}


## Usage

${data.usage}


## License

${licenseBadge}

${data.title} © is licensed under the ${data.license} license.  

For more information regarding the ${data.title}'s license, please visit: 
https://opensource.org/licenses/${data.license}


## Contributing

${data.contributing}


## Tests

${data.tests}


## Questions

If you'd like to ask questions or report issues about the ${data.title} project. 
Please reach out to https://github.com/${data.questions}. Or email us directly at ${data.email}.
  `;
}


// Exports the Functions in generateMarkdown.js
module.exports = {
  renderLicenseBadge,
  generateMarkdown
};