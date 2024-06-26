// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === "Apache") {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    } else if (license === "GPL") {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)   
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installationInstructions};
  ## Usage
  ${data.usageInformation};
  ## Contributing
  ${data.contributionGuidelines};
  ## Test instructions
  ${data.testInstructions};
  ## License
  ${renderLicenseBadge(data.license)};
  ## Questions
  For any further questions, please contact me at my email ${data.email}, and for additional project check out my GitHub at github.com/${data.githubUsername}
  `;
}

module.exports = generateMarkdown;
