var express = require('express');
var app = express();
var PORT = process.env.PORT || 7009;
var bodypaeser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var bcrypt = require('bcrypt')
var bcryptjs = require('bcryptjs')
const cookieParser = require('cookie-parser')
mongoose.set('strictQuery', false);


mongoose.connect('mongodb+srv://project:12345@cluster0.9cqdtbu.mongodb.net/Acklny',
{useNewUrlParser: true ,
useUnifiedTopology: true,
// useCreateIndex: true
})
.then(()=>{console.log("Connected")})
.catch((e)=>{console.log("failed" + e)})


const EmployeeRoute = require('./Routes/employee')

const kafiraRouter=require('./Routes/kafira');
const aliBaba=require('./Routes/alibaba');
const balacona=require('./Routes/balaconaRout');
const july=require('./Routes/julyRout');
const desbacitoo=require('./Routes/desbacitoo');
const lamira=require('./Routes/lamiraRout');


const AuthRoute = require('./Routes/auth')   
const User = require('./Model/user')
app.use(cookieParser());



const logging = require("./MiddleWares/logging");
app.use("/",logging);


app.use(bodypaeser.urlencoded({extended:true}));
app.use(bodypaeser.json());
app.use(cors());
app.use(express.json())


app.use(AuthRoute)
app.use('/api/employee',EmployeeRoute);


app.use("/api/desbacitoo",desbacitoo);
app.use("/api/23july",july)
app.use("/api/balacona",balacona)

app.use("/api/lamira",lamira)
app.use("/api/kafira",kafiraRouter);
app.use("/api/alibaba",aliBaba)

const alibabaCart = require('./Routes/cartalibaba')
app.use('/alibaba', alibabaCart)











app.listen(PORT,()=>{console.log("http://localhost:" + PORT)});


/**
 * npm i express
 * 
 * npm i mongoose
 * 
 * npm i ejs
 * 
 * npm i body-parser
 * 
 * npm i cors
 * 
 * npm i express mongoose ejs body-parser cors
 * 
 * nodemon server
 * 
 *
 * 
//  * /////////////////////////////////////////////////
 * 
 * npm init -y
 * 
 *  npm i bcrypt
 * 
 * npm i --save-dev nodemon
 * 
 * npm install express-validator
 * 
 * npm i jsonwebtoken cookie-parser
 */
