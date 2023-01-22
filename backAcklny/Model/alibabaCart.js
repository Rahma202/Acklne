const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId


const cartSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true,
        ref: 'User'
    },
    items: [{
        itemId: {
            type: ObjectID,
            ref: 'OrderItem',
            required: true
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})


const Cart = mongoose.model('Cart', cartSchema, 'Cart')
module.exports = Cart