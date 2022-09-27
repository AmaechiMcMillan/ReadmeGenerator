const fs = require("fs");
const inquirer = require("inquirer");


function generateBadgeForLicense(license) {
  if (license === "MIT")
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  else if (license === "Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  else if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }
  else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  else {
    return "![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
  }
}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe your project:",
      name: "description",
    },
    {
      type: "input",
      message: "What languages, frameworks and/or libraries did you use on this project?",
      name: "installation",
    },
    {
      type: "input",
      message: "How does this project work?",
      name: "usage",
    },
    {
      type: "list",
      message: "Which licenses did you use for this project?",
      name: "license",
      choices: ["MIT", "Mozilla", "IBM", "ISC", "Hippocratic 3.0"],
    },
    {
      type: "input",
      message: "Who all contributed on this project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Where there any tests done on this project?",
      name: "tests",
    },
    {
      type: "input",
      message: "Enter GitHub username:",
      name: "questions",
    },
    {
      type: "input",
      message: "Enter email address:",
      name: "questions2",
    },
  ])
  .then((response) => {
    console.log(response);
    let readMeText = (response) => {
      return `
# ${response.title}
      
## Table Of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License 
${generateBadgeForLicense(response.license)}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
${response.questions2}
[Github](https://github.com/${response.questions})
      
      `;
    };

    fs.writeFile("ReadMe.md", readMeText(response), (error) =>
      error ? console.log(error) : console.log("Congrats! You made a readMe!")
    );
  });
