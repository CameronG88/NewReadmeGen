function generateReadme(answers) {
    return `# ${answers.title}

    ![Github license](https://img.shields.io/badge/license-${answers.license}-green.svg)
    
    ## Description
    
    ${answers.description}

    ## Table of Contents:

    * [Installation](##installation)
    * [Usage](##usage)
    * [License](##license)
    * [Contributing](##contributing)
    * [Contact/Questions](##contact/questions)
    
    ## Installation

    Follow these instructions and download the listed prerequisite files to use this project:
    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## License

    This project is licensed under: ${answers.license}

    ## Contributing

    ${answers.contribute}

    ## Contact/Questions

    For any questions feel free to check out my GitHub profile or reach me by my email below

    GitHub : https://github.com/${answers.github}

    Email: ${answers.email}
`;
}
module.exports = generateReadme;