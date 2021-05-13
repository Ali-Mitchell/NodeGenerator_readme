// Packages required for these application 
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


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
      // **Talk about licenses with Namita
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

  ]); 
  
  // Write the user response to a file 
  // .then(function(data) {
  //   console.log("User  response :", data)
  //   // Bonus: Generate the name of your user file from their input
  //   const filename =
  //     data.title
  //       .toLowerCase()
  //       .split(' ')
  //       .join('-') + '.md';

  //   fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  //     if (err) {
  //       return console.log(err);
  //     }

  //     console.log('Success!');
  //   });
  // });


function writeToFile(fileName, data) {
  // **What is the _dirname doing?
    fs.writeFile(path.join(__dirname, fileName), data, err =>{
        console.log(err);
    })
}

//   // TODO: Create a function to initialize app
function init() {
  questions()
      .then(answers => {
          writeToFile('README.md', generateMarkdown(answers));
          console.log("You're Readme file has been created")
      });
};
// // Function call to initialize app
init();