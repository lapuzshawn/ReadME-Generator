/*
// TODO: Include packages needed for this application - DONE
const inquirer = require('inquirer');
const fs = require('fs'); 

// TODO: Create an array of questions for user input - done
const questions = [];

// TODO: Create a function to write README file -DONE
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app - ?
function init() {}

// Function call to initialize app = ?
init();
*/

/*** Starter Code ABOVE &&& Personal Code BELOW **************************/

// Includes packages needed for this application 
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown.js')
//C:\..\bootcamp\homework\README Generator\potential-enigma\Develop\utils\generateMarkdown.js


// Prompt the user for project information for REadme file using inquirer
inquirer.prompt([

   // An array of questions for user input 
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of license do you want to use for your project?',
    choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for contributing to your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions for running tests for your project:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Provide your Github username. This is for users to ask questions or report issues regarding your project:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your E-Mail. This is for users to ask questions or report issues regarding your project:',
  },
]).then((answers) => {

  // Constructs an object with the Collected information from PROMPT
  const readmeData = {
    title: answers.title,
    description: answers.description,
    installation: answers.installation,
    usage: answers.usage,
    license: answers.license,
    contributing: answers.contributing,
    tests: answers.tests,
    questions: answers.questions,
    email: answers.email,
};

  // Generate the Readme file from the collected information from the PROPMT 
  const readmeString = genMarkdown.generateMarkdown(readmeData);

  // Write the Readme file to the file system
  fs.writeFile('README.md', readmeString, (err) =>
    err ? console.error(err) : console.log('Readme file created successfully.')
  );
});

// Function call to initialize app = ?
