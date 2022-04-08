const Employee = require("../models/Employee");
module.exports = class EmployeeController {
  static async showEmployees(req, res) {
    //torno o método assíncoro para permitir eu aguardar carregar os dados do banco
    // com o 'await'
    const employees = await Employee.getEmployees()

    //passando para tela os dados
    res.render("employees/all", { employees });
    
  }
  //método para abrir a tela para cadastro de empregado
  static createEmployee(req, res) {
    console.log('entrou')
    res.render('employees/create')
  }
  static async getEmployee(req, res) {
    const id = req.params.id
    
    const employee = await Employee.getEmployeeById(id.trim())

    res.render('employees/employee', { employee })
  }
  //método para salvar no banco de dados um empregado
  static createEmployeePost(req, res) {
    const name = req.body.name
    const email = req.body.email
    const date = req.body.date
    const salary = req.body.salary
    const department = req.body.department
   

    const employee = new Employee(name, email, date, salary, department)

    employee.save()

    res.redirect('/')
  }
  static removeEmployee(req, res) {
    const id = req.params.id

    Employee.removeEmployee(id)

    res.redirect('/')
  }
  static async editEmployee(req, res) {
    const id = req.params.id

    const employee = await Employee.getEmployeeById(id)

    res.render('employees/edit', { employee })
  }
  static async editEmployeePost(req, res) {
    const id = req.body.id
    const name = req.body.name
    const email = req.body.email
    const date = req.body.date
    const salary = req.body.salary
    const department = req.body.department
  
       
    const employee = new Employee(name, email, date, salary, department)

    await employee.updateEmployee(id)

    res.redirect('/')
  }
}