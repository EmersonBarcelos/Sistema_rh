const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");

router.get("/", EmployeeController.showEmployees);
router.get("/create", EmployeeController.createEmployee);
router.post("/create", EmployeeController.createEmployeePost);
router.get('/edit/:id', EmployeeController.editEmployee)

router.get('/:id', EmployeeController.getEmployee)
router.post('/remove/:id', EmployeeController.removeEmployee)
router.post('/edit', EmployeeController.editEmployeePost)

module.exports = router;