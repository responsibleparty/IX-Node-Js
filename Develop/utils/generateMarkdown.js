// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "None"){
    return ""
  } else {
    let licenseType = license.replace(" ", "%20");
    return `[![Generic badge](https://img.shields.io/badge/license-${licenseType}-gray.svg)](https://shields.io/)`
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
  let badge = renderLicenseBadge(data.license)
  return `# ${data.title}
${badge}
# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Question](#question)

## Description
${data.description}

## Installation
Run the following command to install the files
~~~ 
${data.installation} 
~~~ 

## Usage
${data.usage}

## Contribution
${data.contribution}
If you'd like to contribute, please visit my GitHub <https://github.com/${data.contribution} >

## Test
~~~ 
${data.test}
~~~

## Question
Questions? Email me at <${data.question}>
`;
}

module.exports = generateMarkdown;
