const User =require('../Model/user')


exports.alibabaAdmin =  (req,res,next) => {

    if(!req.body.role === "alibabaAdmin"){

        res.status(403).send("you are not Alibaba Admin")
    }
    
    next()
}
// ///////////////////////////////////////////////////////

exports.balaconaAdmin =  (req,res,next) => {

    if(!req.body.role === "balaconaAdmin"){

        res.status(403).send("you are not balacona Admin")
    }
    
    next()
}

// ////////////////////////////////////////////////////////


exports.lamiraAdmin =  (req,res,next) => {

    if(!req.body.role === "lamiraAdmin"){

        res.status(403).send("you are not lamira Admin")
    }
    
    next()
}

// ////////////////////////////////////////////////////////////

exports.julyAdmin =  (req,res,next) => {

    if(!req.body.role === "julyAdmin"){

        res.status(403).send("you are not july Admin")
    }
    
    next()
}

// ////////////////////////////////////////////////////////////

exports.desbacitoAdmin =  (req,res,next) => {

    if(!req.body.role === "desbacitoAdmin"){

        res.status(403).send("you are not desbacito Admin")
    }
    
    next()
}
// ////////////////////////////////////////////////////////////
exports.kafiarAdmin =  (req,res,next) => {

    if(!req.body.role === "kafiarAdmin"){

        res.status(403).send("you are not kafiar Admin")
    }
    
    next()
}
