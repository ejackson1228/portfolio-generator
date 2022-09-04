const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [Name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(Name, github), err => {
    if(err) throw new Error(err);

    console.log("portfolio complete! check out index.html too see the output");
});