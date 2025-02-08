// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project?',
      }, 
    {
        type: 'input',
        name: 'description',
        message: 'What would you like to add to your Description section?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter Installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Which License would you like to add: MIT, Apache 2.0, GPL 3.0, BSD 3:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions:',
    },
    {
        type: 'input',
        name: 'questionGitUserName',
        message: 'Please enter your github username:',
    },
    {
        type: 'input',
        name: 'questionGitProfile',
        message: 'Please enter a link to your github profile:',
    },
    {
        type: 'input',
        name: 'questionEmail',
        message: 'Please enter your email address:',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync('README.MD', data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        
        .then((inquirerResponses) => writeToFile((generateMarkdown({ ...inquirerResponses })

)))
};
// Function call to initialize app
init();
