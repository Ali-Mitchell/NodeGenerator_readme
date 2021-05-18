// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
        function createLicenseBadge(license) {
          if (license !== 'None'){
            return `[![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)](#license)`
          }
          return '';
        }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseInfo(license) {
  if (license !== 'None'){
    return `This project is covered under the ${license} license.`
  }
  return `This project does not have any licensing.`;
}





// TODO: Create a function to generate markdown for README
//  ${renderLicenseBadge(data.license)}

function generateMarkdown(data) {
  return `# ${data.title}

  ${createLicenseBadge(data.license)}

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
  ![](${data.usage})
  ## License
  ${renderLicenseInfo(data.license)}
  ## Contribution
  This project was created by ${data.GithubUser} Got to [Github](https://www.github.com/${data.username})
  Special instructions for contributing:
  ${data.Contributions}
  ## Tests
  ${data.test}
  ## Questions
  For questions please contact: ${data.Email}
`;
}

// What is this doing?
module.exports = generateMarkdown;
