// function to generate markdown for README

function renderLicenseBadge(license) {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/liences-${liences}-blue.svg)`
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description
  'hello'

`; 
} 

module.exports = generateMarkdown;
