const inquirer = require("inquirer")
const connection = require('./db/connection')
const db = require('./db/connection')
const addDepartmentsQuestion = require('./lib/questions')
const addEmployeeQuestion = require('./lib/questions')
const mainMenuQuestion  = require('./lib/questions') 
const addRoleQuestion = require('./lib/questions')
const updateEmployeeQuestion = require('./lib/questions')



async function MainMenu () {
    const {choices} = await inquirer.prompt(mainMenuQuestion)
    console.log(choices)
    switch (choices){
        case "View Departments":
            ViewAll('department')
            break;
        case "View Roles":
            ViewAll('roles')
            break;
        case "view Employees":
            ViewAll('employees')
            break;
        case "Add Role":
            addRole()
            break;
        case "Add Employee":
            addEmployee()
            break;
        case "Add Department":
            addDepartment()
            break;
        case "Update Employee":
            UpdateEmployee()
            break;
        default:
            console.log("You are using Employee Tracker!")
            process.exit(0)
            break;
    }
}


async function ViewAll (table) {
    try {
        const [rows, fields] = await connection.execute(`SELECT * FROM ${table}`);
        console.table(rows);
        MainMenu()
    } catch (error) {console.log(error)}
}

async function addEmployee () {
    try {
        const {First, Last, manger, role } = await inquirer.prompt(addEmployeeQuestion);
        const Employee = await connection.query(`INSERT INTO employees (first_name, last_name, manager_id, role_id) VALUES('${First}','${Last}','${manger}' '${role}');`)
    } catch (err) {
        console.log(err)
    }
    viewTable('employees')
}

async function addDepartment () {
    try {
        const {name} = await inquirer.prompt(addDepartmentsQuestion)
        const NewDept = await connection.query(`INSERT INTO departments (name) VALUES('${name}');`)
    }
    catch (error){
        console.log(error)
    }
    viewTable("departments")
}


async function addRole () {
    try {
        const {title, salary, dept_id} = await inquirer.prompt(addRoleQuestion)
        const newRole = await connection.query(`INSERT INTO role (title, salary, dept_id) VALUES('${title}' '${salary}' '${dept_id}')`)
    }
    catch (error){
        console.log(error)
    }
    viewTable('role')
}

async function UpdateEmployee () {
    try {
        const {id , role_id} = await inquirer.prompt(updateEmployeeQuestion)
        const UpdatedEmployee = await connection.query(`UPDATE employees SET role_id='${role_id}' WHERE id = '${id}'`)
    }
    catch (error){
        console.log(error)
    }
    viewTable('employees')
}

MainMenu()