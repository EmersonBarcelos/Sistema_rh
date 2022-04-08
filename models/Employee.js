const { ObjectId } = require('mongodb')
const connection = require('../db/connection');

class Employee {

  constructor(name, email, date, salary, department) {
    this.name = name;
    this.email = email;
    this.date = date;
    this.salary = salary;
    this.department = department;
  }

  save() {
    const employee = connection.db().collection('employees').insertOne({
      name: this.name,
      email: this.email,
      date: this.date,
      salary: this.salary,
      department: this.department,
    })

    return employee
  }
  static getEmployees() {
    const employees = connection.db().collection('employees').find().toArray()

    return employees
  }
  static async getEmployeeById(id) {

     const employee = await connection
       .db()
       .collection('employees')
       .findOne({ _id: ObjectId(id.toString()) })
 
     return employee
   }

   static async removeEmployee(id) {
     //const o_id = new conn.ObjectID(id.trim());
     await connection
       .db()
       .collection('employees')
       .deleteOne({ _id:  ObjectId(id.toString())})
 
     return
   }

   updateEmployee(id) {
     connection
       .db()
       .collection('employees')
       .updateOne({ _id: ObjectId(id) }, { $set: this })
 
     return
   }
}

module.exports = Employee