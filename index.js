// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter Title:',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Enter Description:',
        name: 'Description',
    },
    {
        type: 'checkbox',
        message: 'List Table of Contents',
        name: 'Table of Contents',
        choices: ['Installation Requirements', 'Usage', 'Licenses', 'Contributions', 'Tests', 'Questions'],
    },
    {
        type: 'input',
        message: 'List any installation requirements:',
        name: 'Installation Requirements',
    },
    {
        type: 'input',
        message: 'List any contributions:',
        name: 'Constributions',
    },
    {
        type: 'input',
        message: 'Enter Github username:',
        name: 'Github username',
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'Email Address',
    }

]

// TODO: Create a function to write README file
function writeToFile('README.md', 'UTF8'){

}

// TODO: Create a function to initialize app
function init(questions) {
        
}
// Function call to initialize app
init();
