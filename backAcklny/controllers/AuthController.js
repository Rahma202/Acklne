const User  = require('../Model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signToken = (userId) => {
    return jwt.sign({_id: userId}, 'secretkey')    
}

const signupUser = async (req, res) =>{
    try{

        const user = await User.findOne({email: req.body.email})
        if (user){
            return res.status(400).json({success: false, error: 'this email is already in use',
        })
    }
    
    const newUser = new User(req.body)
    const {name, email, phone, address, role} = newUser
    await newUser.save()

    const token = signToken(newUser._id);
    res.cookie('auth_token', token, {
        httpOnly: true,
    })


    res.status(201).json({success: true, user: {name, email, phone, address, role}})

}catch(error){
    console.log(error)
    res.status(500).json({success: false, error: 'error occured!'})
}
}

const signinUser = async (req,res) => {
    const {email, password} = req.body;

    try{

        const user = await User.findOne({ email })
        
        if(!user){
            return res.status(401).json({success: false, error: 'user not found'})
        }
        
        const isMatch = await user.compairePassword(password,user.password);
        if(!isMatch){
            return res.status(401).json({success: false, error: 'email / password do not match'})
        }

        const token = signToken(user._id);
        res.cookie('auth_token', token, {
            httpOnly: true,
        })

        //  const {name, phone, address, role} = user
        res.json({success: true, user,token})
    }catch(error){
        res.status(500).json({success: false, error: 'error occured!'})
    }
        
    }
    
    
    const signOut = (req,res) =>{
        res.clearCookie('auth_token')
        res.json({success: true})
    }











// ////////////////////////   old   /////////////////////////////////////////////

const register = async (req , res , next) =>{

    bcrypt.hash(req.body.password ,10,async function(err,hashedpass){
        if(err){
            res.json({
                error :err
            })
        }

        let user =  new User ({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedpass,
            address: req.body.address
            // token: token
                    })
        await user.save()
        .then(user => {
            res.json({
                message: 'user added successfully'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error occured'
            })
        })
    })

}

const login = (req,res,next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.password,function(err ,result){
                if(err) {
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'secretValue', {expiresIn: '1d'})
                    res.json({
                        message: 'Login Successful',
                        token: token
                    })
                }else{
                    res.json({
                        message: 'password does not matched'
                    })
                }
            })

        }else{
            res.json({
                message: 'No user found'
            })
        }
    })
}




const logout = (req,res,next) =>{
    req.session.destroy(()=>{
        res.redirect("/");
    })
}


module.exports = {
    register,login,logout,signupUser,signinUser,signOut
}