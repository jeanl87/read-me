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
  return ` # ${license}
  `; //put link in []
  // http://www.apache.org/licenses/
  // https://creativecommons.org/licenses/
  // https://www.isc.org/licenses/
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` #${license}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  What was your motivation?
  
  The motivation 
  
  Why did you build this project?
  
  To learn how to write markdowns and generate a good readme file 
  
  What problem does it solve?
  
  
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

  ## Contributing to repositiry 
   ${data.contributing}
`;
}

module.exports = generateMarkdown;
