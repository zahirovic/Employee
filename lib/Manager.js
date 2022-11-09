// class
class Manager{
// constructor 
    constructor() {
        this.id = 1
        this.email = "Email:"
        this.office = "Office number: 1"
    
    }
    
    // returning 
    id(){
        return this.id;
    }
    
    email(){
        return this.email;
    }
    
    github(){
        return this.office;
    }
    
    
    }
    // export 
    module.exports = Manager;