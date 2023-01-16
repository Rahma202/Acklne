const express = require("express")
const router = express.Router()

const Employeecontroller = require('../controllers/EmployeeControllers')
router.get('/', Employeecontroller.index)
router.post('/show', Employeecontroller.show)
router.post('/store', Employeecontroller.store)
router.post('/update', Employeecontroller.store)
router.post('/delete', Employeecontroller.store)


module.exports = router