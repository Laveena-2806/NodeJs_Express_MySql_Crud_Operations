const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employee.controller');

// get all employees
router.get('/', EmployeeController.getEmployeelist);


// get employee by id
router.get('/:id', EmployeeController.getEmployeeById);

// create new employee
router.post('/', EmployeeController.createNewEmployee);

// update employee
router.put('/:id', EmployeeController.updateEmployee);

// delete employee
router.delete('/:id', EmployeeController.deleteEmployee);

module.exports = router;