// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![licenseBadge](https://shields.io/badge/license-${license}-green)`;
    // return `![License](https://img.shields.io/badge/License-${license}%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    // return license links
    return `[Link to License] https://choosealicense.com/licenses/mit/`;
  } else if (license === "apache") {
    return `[Link to License] https://choosealicense.com/licenses/mpl-2.0/`;
  } else if (license === "mozilla") {
    return `[Link to License] https://choosealicense.com/licenses/apache-2.0/`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
     ${renderLicenseBadge(license)}
     ${renderLicenseLink(license)}
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   ## Table of Contents
   * [Instructions](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributions)
   * [Questions](#questions)
   * [Tests](#tests)
   
   ## Description
   ${data.userDescription}
   
   ## Usage
   ${data.usage}
  
   ${renderLicenseSection(data.license)}

   ## Contributions
   ${data.contributions}

   ## Questions
   If you have any questions, email me at ${data.email}.
   
   ## Tests
   ${data.tests}
`;
}

module.exports = generateMarkdown;
