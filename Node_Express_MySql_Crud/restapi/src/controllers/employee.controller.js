const EmployeeModel = require('../models/employee.model');

// get all employee list
exports.getEmployeelist = (req, res) => {
    // console.log('here is all employee list');
    EmployeeModel.getAllEmployees((err, employees) => {
        console.log('We  are here');
        if (err)
            res.send(err);
        console.log('Employees', employees);
        res.send(employees);
    });
}

// get employee by ID
exports.getEmployeeById = (req, res) => {
    // console.log('Get emp by ID');
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        console.log('single Employee data:', employee);
        res.send(employee);
    })
}

// create new employee
exports.createNewEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'please fill all fields' });
    } else {
        console.log('valid data');
        EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Employee created successfully', data: employee });

        })
    }
}


// update employee
exports.updateEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData)
        // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'please fill all fields' });
    } else {
        console.log('valid data');
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Employee updated successfully', data: employee });

        })
    }
}

// delete employee
exports.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        res.json({ sucess: true, message: 'Employee deleted succesfully' });
    })
}