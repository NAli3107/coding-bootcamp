const inquirer = require("inquirer");

const fs = require("fs");

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is you name?',
    },
    {
        type: 'input',
        name: 'languages',
        message: 'What languages do you know?',
    },
    {
        type: 'input',
        name: 'communication',
        message: 'What is your preferred method of communication?',
    },
]);
.then((answers) => {
    fs.writeFile
})
