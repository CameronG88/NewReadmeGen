// require all the necessary modules
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

// set up writefileasync
const writeFileAsync = util.promisify(fs.writeFile);

// Create an empty array to hold the license description, links and badge data. 
let licenseArray = [];

// Function to prompt the user with questions, the answers will then be used to generate the README.md file.
function promptUser() {
    return inquirer.prompt(
        [
            {
                // the title of the project/readme
                type: "input",
                name: "title",
                message: "What is the title of your project or the desired title for the README.md file?"
            },
            {
                // Description
                type: "input",
                name: "description",
                message: "Enter a description for your project. What it will be used for, who will use it, etc. etc."
            },
            {
                // Add a Screenshot of project
                type: "input",
                name: "screenshot",
                message: "Enter the filepath or url for a screenshot/gif or your application."
            },
            {
                // Installation Instructions
                type: "input",
                name: "installation",
                message: "How can the user install your application, are there any prerequisite installations required to run your application?"
            },
            {
                // Usage
                type: "input",
                name: "usage",
                message: "Provide instructions and examples for how to use your app."
            },
            {
                // Ask for github username to put into github url.
                type: "input",
                name: "github",
                message: "What's your github username?"
            },
        ])
}