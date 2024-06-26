// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Licenses](#licenses)
  [Contributions](#constributions)
  [Tests](#tests)
  [Questions](#questions)

  ## Description
  #${data.description}
  #${data.contents}
  ## Installation
  #${data.installation}
  ## Usage
  #${data.usage}
  ## Licenses
  #${data.licenses}
  ## Constributions
  #${data.constributions}
  ## Tests
  #${data.test}
  ##Questions
  #${data.github}
  #${data.email}
`;
}

module.exports = generateMarkdown;
