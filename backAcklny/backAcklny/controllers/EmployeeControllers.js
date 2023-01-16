const { response } = require('express')
const Employee = require('../Model/Employee')


// get all admins
const index =(req,res,next) =>{
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

// find by id
const show =(req,res,next) =>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

// add new employee
const store = (req,res,next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()

    .then(response => {
        res.json({
            message: 'Employee Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

// update an employee

const update = (req,res,next) => {
    let employeeID = req.body.employeeID

    let updatedData ={
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() =>{
        res.json({
            message: 'Employee updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

// Delete an employee

const destroy =(req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message: 'Employee deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}


module.exports = {
    index, show, store, update, destroy
}