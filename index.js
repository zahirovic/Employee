// variables 
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const { appendFile } = require('graceful-fs');


// manager object function 
function generateManagerObject(){
    const managerObject = new Manager();
    console.log(managerObject)

}
 // engineer object 
function generateEngineerObject(){
    const engineerObject = new Engineer();
    console.log(engineerObject)

}

// employee object 
function generateEmployeeObject(){
    const employeeObject = new Employee();
    console.log(employeeObject)

}

// intern object 
function generateInternObject(){
    const internObject = new Intern();
    console.log(internObject)

}
//
//function writeToFile(fileName, data) {
 //   return fs.writeFileSync('./dist/index.html', data)
//}

//function init() {
  //  return inquirer.prompt(Manager)
    
//}


//let objToGenerate = ""

//if(objToGenerate === "Manager"){
 //  generateManagerObject()
//}else if(objToGenerate === "Engineer"){
  //  generateEngineerObject()
//}else if(objToGenerate === "Employee"){
   // generateEmployeeObject()
//}else if(objToGenerate === "Intern"){
 //  generateInternObject()
//}