const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));


// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(Name, github);


// fs.writeFile('./index.html', pageHTML, err => {
//     if(err) throw err;

//     console.log("portfolio complete! check out index.html too see the output");
// });