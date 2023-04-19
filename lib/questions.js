class Question {
    constructor(name,message){
        this.name = name,
        this.message = message
    }
}

class ListQuestion {
    constructor(name, message, choices){
    (name,message)
    this.type = "list"
    this.choices = choices
    }
}

class InputQuestion {
    constructor(name,message){
        (name,message)
        this.type = "input"
    }
}

const mainMenuQuestion = [new ListQuestion("choice", "Select what you'd like to do."["View Roles", "View Departments",
    "View Employees", "Add Employee", "Add Role", "Add Department", "Update Employee", "Exit"
])];

const addEmployeeQuestion = [new InputQuestion("First", "What is the First Name of the Employee?"),
new InputQuestion("last", "What is the Last name?"), new InputQuestion("role", "What is the Employees Role?"),
new InputQuestion("manger", "What is the Employees Mangers ID?")];

const addRoleQuestion = [new InputQuestion("title", "What is the new role of this Employee?"), new InputQuestion("salary", "What is the new Salary for this role?"), new InputQuestion("dept_id", "What is the Department ID for employee?")]

const addDepartmentsQuestion = [new InputQuestion ("name", "What is the Name of the new Department?")]

const updateEmployeeQuestion = [new InputQuestion ("id", "Enter Employee ID"), new InputQuestion ("role_id", "ENter NEw role ID.")]

module.exports = {mainMenuQuestion,addRoleQuestion,addDepartmentsQuestion,updateEmployeeQuestion,addEmployeeQuestion}