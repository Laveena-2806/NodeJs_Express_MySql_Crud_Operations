const express = require('express');

const app = express();
const bodyParser = require('body-parser');

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse the request data in json format
app.use(bodyParser.json());

// define root route
app.get('/', (req, res) => {
    res.send("Hello");
});

// import employee routes
const employeeRoutes = require('./src/routes/employee.route');
// create employee routes
app.use('/api/v1/employee', employeeRoutes);

// listen to the port
app.listen(port, () => {
    console.log(`Express Server is running at ${port}`);
})