// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `# ${license}
  `; //use example Dan sent 
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
   

  ## Table of Content
  * [github](#github)
  * [license](#license)
  ## Github
  ## ${data.github}

  ## Email 
  ## ${data.email}

  ## License 
  ## ${data.license}
  ## ${data.dependencies}
  ## ${data.command}
  ## ${data.repo}
  ## ${data.contributing}
`;
}

module.exports = generateMarkdown;
