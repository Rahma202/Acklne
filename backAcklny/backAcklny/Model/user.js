const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name: {
                type: String,
                required:true,
                minlength:3,
                trim: true
            },
    email: {
                type: String,
                required: true,
                unique: true,
                trim: true
            },
    phone: {
                type: Number,
                required: true
            },
    password: {
        type: String,
        required:true,
        minlength:3,
        trim: true
            },
    address: {
                type: String,
                required: true
            },
    role:{
        type: String,
        default: 'user',
        enum: ['user', 'alibabaAdmin', 'balaconaAdmin', 'lamiraAdmin', 'julyAdmin', 'desbacitoAdmin', 'kafiarAdmin']
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
}, {
        
},{timestamps: true});

// userSchema.pre('save', function(next){
//     if(!this.isModified('password')){
//         return next()
//     }



//     bcrypt.hash(this.password, 10, (err, hashedpassword) =>{
//         if(err) return next(err);

//         this.password = hashedpassword 
//         next();
//     } )
// });


// userSchema.methods.compairePassword = function(password){
//     if(password){
//         return bcrypt.compare(password, this.password)
//     }

//     return false;
// }

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
    return userObject
}

userSchema.methods.generateAuthToken =  async function () {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'hellooo')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
    
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if (!user) {
        throw new Error('user not found')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) {
        throw new Error('Unable to login')
    }
    return user
}

//hash plaintext password before saving
userSchema.pre('save', async function(next) {
    const user = this
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model("User", userSchema)

module.exports = User




// module.exports = mongoose.model('User', userSchema)



