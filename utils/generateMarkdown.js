// function to generate markdown for README

function renderLicenseBadge(license) {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Features
  ${data.features}

`; 
} 

module.exports = generateMarkdown;
