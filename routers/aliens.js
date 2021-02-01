const server = require('express')

const router = server.Router()
const Alien = require('../models/alien')

// Get request.
// returns all alien objects from database
router.get("/", async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }
    catch(err){
        res.send("Error processing your request.."+err);
    }
})

// Get request.
// returns the alien object which is requested from url params

router.get("/:id", async(req, res) => {
    try{
        const aliens = await Alien.findById(req.params.id)
        res.json(aliens)
    }
    catch(err){
        res.send("Error processing your request.."+err);
    }
})

// Post request.
// creates an object with all properties retrieved from the request parameters
router.post("/", async(req, res) => {
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error'+err)
    }
})

// Patch request.
// updates an object with all properties retrieved from the request parameters
router.patch("/:id", async(req, res) => {
    try{
        const alien =  await Alien.findById(req.params.id)
        alien.name = req.body.name,
        alien.tech = req.body.tech
        const a1 = await alien.save()
        res.send(a1)
    }
    catch(err){
        res.send("error"+ err)
    }
})

// delete request.
// deletes an object with all properties retrieved from the request parameters
router.delete("/:id", async(req, res) => {
    try{
        const alien =  await Alien.findById(req.params.id)
        const a1 = await alien.remove()
        res.send(a1)
    }
    catch(err){
        res.send("error"+ err)
    }
})

module.exports = router