// title of my project      input
//  Description,            input
//  Table of Contents,      generate as a list/ input as a list?
//  Installation, 
//  Usage,                  input
//  License,                list  notice is added to the section of the README entitled License that explains which license the application is covered under
                            // An open source license protects contributors and users. Businesses and savvy developers won’t touch a project without this protection.

                            // Existing projects and communities
                            // MIT License
                            // GNU General Public License
                            // No License 


//  Contributing,           input
//  Tests,                  input
// Questions 
    //  git hub username,   input
    // github profile,      input
    // email                input

    // Click on link in table of contents I am taken to the corresponding section 


//npm 
const fs = require('fs');
//External package so u need to install 
const inquirer = require('inquirer');

// Prompt the user
inquirer
  .prompt([
    {
      type: 'input',//user can enter values 
      name: 'title',
      message: 'What is the title of your product?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your product'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation requirements or instructions?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please copy an image link of your product in use'
      },

    {
      type: 'list',
      name: 'license',
      message: 'Choose an Open Source License for your product. Need more info? Check out https://choosealicense.com/',
      choices: ['Existing projects and communities', 'MIT License', 'GNU General Public License', 'No License']
    },

    {
     type: 'input',
        name: 'Contributions',
        message: 'Are there special instructions for adding contributions to this product?'
      },

      {
        type: 'input',
        name: 'Tests',
        message: 'Are there any tests or examples for your'
      },

      {
        type: 'input',
        name: 'GithubUser',
        message: 'What is your Github User Name'
      },

      {
        type: 'input',
        name: 'GithubLink',
        message: 'What is the link to your github?'
      },

      {
        type: 'input',
        name: 'Email',
        message: 'What is your email?'
      },

  ]) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    console.log("User  response :", data)
    // Bonus: Generate the name of your user file from their input
    const filename =
      data.userName
        .toLowerCase()
        .split(' ')
        .join('-') + '.json';

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });


//   // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();