// require all the necessary modules
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateReadme = require("./utils/generateReadme")

// set up writefileasync
const writeFileAsync = util.promisify(fs.writeFile);

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
                // Installation Instructions
                type: "input",
                name: "installation",
                message: "How can the user install your application, list any prerequisite installations required to run your application?"
            },
            {
                // Usage
                type: "input",
                name: "usage",
                message: "Provide instructions and examples for how to use your app."
            }, 
            {
                // Choose License from list of licenses.
                type: "list",
                name: "license",
                message: "From the list below, choose the your license. For license info, visit: http://www.choosealicense.com",
                choices: [
                    "MIT",
                    "ISC",
                    "MPL 2.0",
                    "Apache 2.0",
                    "Boost 1.0",
                    "Unlicensed"
                ]
            },
            {
                type: "input",
                name: "contribute",
                message: "How can others contribute to this project?"
            },
            {
                // Ask for github username to put into github url.
                type: "input",
                name: "github",
                message: "What's your github username?"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your email:"
            }
           
        ])
}

// function to write answers into readme
async function init() {
    console.log("*****Wait while we generate your new readme*****");
    try {
        const answers = await promptUser();
        const readMe = generateReadme(answers);
        await writeFileAsync("New_README.MD", readMe);

        console.log("Successfully generated your new Readme")
    }
    catch (err) {
        console.log(err);
    }
}
init();