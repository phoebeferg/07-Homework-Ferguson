// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
        return '';
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '\n* [License](#license)\n';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `

## Project Title: ${response.title}
${renderLicenseBadge(response.license)}
            
## Description
${response.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

${renderLicenseSection(response.license)}
${renderLicenseLink(response.license)}



## Contributing
${response.contributing}

## Tests
To run tests, run the following command:
${response.tests}

## Questions
If you have any questions, please reach out to ${response.questionEmail}

More of my work can be found at ${response.questionGitUserName} (${response.questionGitProfile}).


Link to the screenrecording: https://drive.google.com/file/d/1n5MhFQ8p21OdwDzZj6mQl_IUjZaB9SA5/view?usp=sharing
`;  
}

export default generateMarkdown;
