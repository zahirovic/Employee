const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Employee = require('./Employee')
const Intern = require('./Intern')


function generateManagerObject(){
    // Creates a new instance of a class
    const managerObject = new Manager();
    console.log(managerObject)

}
function generateEngineerObject(){
    const engineerObject = new Engineer();
    console.log(engineerObject)

}
function generateEmployeeObject(){
    const employeeObject = new Employee();
    console.log(employeeObject)

}
function generateInternObject(){
    const internObject = new Intern();
    console.log(internObject)

}

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