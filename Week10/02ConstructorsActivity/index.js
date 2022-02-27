// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object

function Developer(name, tech){
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log(`I am ${this.name} and like ${this.tech}!`);
    };
}

const nadira = new Developer('Nadira', 'Wireless headphones')

nadira.introduction()