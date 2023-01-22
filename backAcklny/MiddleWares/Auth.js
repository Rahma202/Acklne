const jwt = require('jsonwebtoken')
const User =require('../Model/user')
exports.isAuth = async (req, res, next) => {   
    console.log(req.header("Authorization"));
    try {
        const token =req.header('Authorization').replaceAll('"', '');

      console.log("j");
        const decoded = jwt.verify(token,'hellooo');
        console.log(token);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token':token})
        if(!user) {
            throw new Error() 
        }
        req.token = token
        req.user = user
        console.log(user);
        next()
    } catch(e) {
        res.status(401).send({error: "Please authenticate"})
    }
}

