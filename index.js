// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown.js');
const { writeFile } = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter Title:',
        name: 'title',
    },
    {
        type: 'editor',
        message: 'Enter Description:',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'List Table of Contents',
        name: 'contents',
        choices: ['Installation Requirements', 'Usage', 'Licenses', 'Contributions', 'Tests', 'Questions'],
    },
    {
        type: 'input',
        message: 'List any installation requirements:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'List any contributions:',
        name: 'constributions',
    },
    {
        type: 'input',
        message: 'Enter Github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'email',
    }

]

// TODO: Create a function to write README file
function writeToFile(filename, data){
    writeFile(filename, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(userData => {
const READMEText = generateMarkdown(userData)
writeToFile('README.md',READMEText)
    })      
}
// Function call to initialize app
init();
