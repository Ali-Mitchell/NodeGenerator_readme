// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
        // function renderLicenseBadge(license) {
        //   if (license !== 'None'){
        //     return `[![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)](#license)`
        //   }
        //   return '';
        // }


        // ${renderLicenseBadge(data.license)}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseInfo(license) {
  if (license !== 'None'){
    return `This project is covered under the ${license} license.`
  }
  return `This project does not have any licensing.`;
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// TODO: Create a function to generate markdown for README
//  add in render badge after test   ${renderLicenseBadge(data.license)}
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseInfo(data.license)}
  ## Contribution
  This project was created by [GitHub](https://www.github.com/${data.username})
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  For questions please contact me via email at:${data.email}
`;
}

// What is this doing?
module.exports = generateMarkdown;
