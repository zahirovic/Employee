// variables 
const inquirer = require ('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Employee = require('./Employee');
const Intern = require('./Intern');

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

// returning objects 
let objToGenerate = ""

if(objToGenerate === "Manager"){
    generateManagerObject()
}else if(objToGenerate === "Engineer"){
    generateEngineerObject()
}else if(objToGenerate === "Employee"){
    generateEmployeeObject()
}else if(objToGenerate === "Intern"){
    generateInternObject()
}