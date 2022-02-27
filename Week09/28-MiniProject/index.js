const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message:'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What do you do for a living?',
            name: 'job',
        },
        {
            type: 'input',
            message: 'What is your favorite food?',
            name: 'hobby',
        }
    ])
    .then((answers) =>
        console.log(answers)
    )
