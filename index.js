const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'your project description?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'license type?',
        choices: ["MIT", "None"]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what command to run install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'what command to run test?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what info does user require?'
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Generating README...`);
        writeToFile('README.md', generateMarkdown({...response}))
        
    }) 

}

// function call to initialize program
init();
