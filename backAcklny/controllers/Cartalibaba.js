const Cart=require("../Model/alibabaCart");
const aliBaba = require('../Model/alibabaModel')


let getCart=async (req, res) => {
    const owner =  `"${req.user.email}"`;
    console.log(owner)

    try {
        const cart = await Cart.findOne({owner:owner });
        console.log(cart);

        if (cart && cart.items.length > 0) {
            res.status(200).send(cart.items);
        } else {
            res.send(null);
        }

    } catch (error) {
         res.status(500).send();
    }
}
let addCart=async (req, res) => {
    const  owner = req.body.user ;
    console.log(owner);

    const itemId  = req.body.itemId;
    const quantity=req.body.quantity;
    const id=req.body.id;

    


    try {
        const cart = await Cart.findOne({ owner });
        const item = await aliBaba.findOne({id:id });
        console.log(item);

        if (!item) {
            res.status(404).send({ message: "item not found" });
            return; 
        }

        const price = item.price;
        const name = item.name;

        //If cart already exists for user,
        if (cart) {
            const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);

            //check if product exists or not
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ itemId, name, quantity, price });
            }

            cart.bill = cart.items.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price;
            }, 0)

            await cart.save();
            res.status(200).send(cart);

        } else {
            //no cart exists, create one
            const newCart = await Cart.create({
                owner,
                items: [{ itemId, name, quantity, price }],
                bill: quantity * price,
            });

            return res.status(201).send(newCart);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("something went wrong");
    }
}
let deletItem=async (req, res) => {
    const owner = req.user._id;
    const itemId = req.query.itemId;

    try {
        let cart = await Cart.findOne({ owner });
        const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);

        if (itemIndex > -1) {

            cart.items.splice(itemIndex, 1);

            cart.bill = cart.items.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price;
            }, 0)

            cart = await cart.save();
            res.status(200).send(cart);
        } else {
            res.status(404).send("item not found");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
}


module.exports = {
    getCart,addCart,deletItem
}
