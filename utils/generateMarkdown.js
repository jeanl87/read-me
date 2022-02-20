// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return ` ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0);
           ![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC);
           [![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)
`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return ` #${license}

`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  What was your motivation?
  
  The motivation for this assignemnt was to be able to understand how to use node js. 
  
  Why did you build this project?
  
  To learn how to write markdowns and generate a good readme file. 
  
  What problem does it solve?
  
  How to write proper and minimal amount of code. 
  
  What did you learn? 
  
  Working with nodejs you don't need to write too much code. 

  ## Table of Content
  * [Github](#github)
  * [License](#license)
  * [Test](#test)
  * [Repository](#respository)
  
  
  ## Github Username 
   ${data.github}

  ## Email 
   ${data.email}

  ## License 
   ${data.license}

  ## Dependencies  
   ${data.dependencies}

  ## Run Test 
   ${data.command}

  ## Repositiry 
   ${data.repo}

  ## Contributing to repository
   ${data.contributing}
`;
}

module.exports = generateMarkdown;
