const express = require('express')
const Item = require('../Model/itemModel')
const {isAuth} = require('../MiddleWares/Auth')


const router = new express.Router()

/////////      create new item   (add (only user))   //////////////

router.post('/items',isAuth, async(req, res) => {
    try {
    const newItem = new Item({
        ...req.body,
        owner: req.user._id
    })
       await newItem.save()
       res.status(201).send(newItem)
    } catch (error) {
    res.status(400).send({message: "error"})
    }
    })


    // ///////////    Fetch an item     //////////////

    router.get('/items/:id', async(req, res) => {
        try{
           const item = await Item.findOne({_id: req.params.id})
        if(!item) {
           res.status(404).send({error: "Item not found"})
        }
           res.status(200).send(item)
        } catch (error) {
           res.status(400).send(error)
        }
        })


// //////////////     Fetch all items      ///////////////////////

router.get('/items', async(req, res) => {
    try {
      const items = await Item.find({})
      res.status(200).send(items)
    } catch (error) {
      res.status(400).send(error)
    }
    })

    // /////////////        Update an item        ////////////////////


    router.patch('/items/:id', isAuth, async(req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'details', 'img', 'price']
        const isValidOperation = updates.every((update) =>              allowedUpdates.includes(update))
           if(!isValidOperation) {
             return res.status(400).send({ error: 'invalid updates'})
        }
        try {
          const item = await Item.findOne({ _id: req.params.id})
          if(!item){
              return res.status(404).send()
          }
          updates.forEach((update) => item[update] = req.body[update])
          await item.save()
          res.send(item)
        } catch (error) {
        res.status(400).send(error)
        }
        })


        // ///////////       Delete an item     ///////////////

        router.delete('/items/:id', isAuth, async(req, res) => {
            try {
            const deletedItem = await Item.findOneAndDelete( {_id: req.params.id} )
               if(!deletedItem) {
                res.status(404).send({error: "Item not found"})
            }
               res.send(deletedItem)
            } catch (error) {
               res.status(400).send(error)
            }
            });

// //////////////       Get orders   (ask : carts or not)    //////////////////

// router.get('/orders', Auth, async (req, res) => {
//     const owner = req.user._id;
//     try {
//     const order = await Order.find({ owner: owner }).sort({ date: -1 });
//     res.status(200).send(order)
//     } catch (error) {
//     res.status(500).send()
//     }
//     })


module.exports = router;