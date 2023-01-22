const express = require('express')
const router = new express.Router()
const User = require('../Model/user')
const {isAuth} = require('../MiddleWares/Auth')


router.post('/api/register', async (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch(e) {
        res.status(400).send(e)
    }
})


router.post('/api/login', async (req, res) => {
    const email=req.body.email;
    const password=req.body.password
    console.log("sd");
    try {
        const user = await User.findByCredentials(email,password)
        const token = await user.generateAuthToken()
        res.send({user, token})   
        console.log(user)     
    } catch(e) {
        res.status(400).send(e)
        
    
    }
})

router.get('/users/logout', isAuth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch(e) {
        res.status(500).send()
    }
})

// ////////////////////////////////////////////////////////

router.post('/users/logoutAll', isAuth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/users/me', isAuth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch(error) {
        res.status(500).send(error)
    }
})
// ////////////////////////////////////////////////////

router.patch('/users/me', isAuth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdate = ['name', 'email', 'password', 'phone' , 'address']
    const validOperation = updates.every((update) => allowedUpdate.includes(update))
    
    if(!validOperation) {
        return res.status(400).send({error: "Invalid operation"})
    }
    try {
        const user = req.user
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        res.send(user)
    } catch(error) {
        res.status(400).send(error)
    
    } 
})




// const Authcontroller = require('../Controllers/AuthController')
// const {check} = require('express-validator')
// const {isAuth} = require('../MiddleWares/Auth')



// router.post('/signup',check(''),Authcontroller.signupUser)
// router.post('/signin',Authcontroller.signinUser)
// router.get('/signout',Authcontroller.signOut)


// router.get('/offers', isAuth , (req,res)=>{
//     console.log(req.user)
//     res.json({success: true, message: "you are in our offers"})
// })
// ////////////////////////////////////////////////////////////////















module.exports = router;