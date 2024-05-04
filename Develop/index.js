// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = "./README.md";



// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "What is a description of your project?"
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "What is the Installation instructions?"
    },
    {
        type: "input",
        name: "usageInformation",
        message: "What is the usage of your project?"
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "What are the contribution guidelines of your project?"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "What are the test instrcutions of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to add?",
        choices: ["MIT", "Apache", "GPL", "None"]
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your Github Username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your E-Mail address?"
    }
])

.then(answers => {
    const {projectTitle, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, githubUsername, email} = answers;


    console.log (`Project Title: ${projectTitle}`);
    console.log (`Project description: ${description}`);
    console.log (`Project's Installation instructions: ${installationInstructions}`);
    console.log (`Project's Usage Information: ${usageInformation}`);
    console.log (`These are the Project's Contribution Guidelines: ${contributionGuidelines}`);
    console.log (`Project's Test Instructions: ${testInstructions}`);
    console.log (`License: ${license}`);
    console.log (`Github Username: ${githubUsername}`);
    console.log (`E-Mail: ${email}`);
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("README.md file has been created!");
        //another method of writing the if statement
        //(err) => err
        // ? console.error(err)
        // : console.log("README.md file has been created!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(fileName, generateMarkdown(data));
    });
}

// Function call to initialize app
init();
