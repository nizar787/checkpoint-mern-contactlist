// import express
const express=require('express');

// initialisation
const contactRouter =express.Router();
const contact= require ('../models/contact');


// add contact
// methode Post
// path http://localhost:5000/contact/add
// body {name, email, phone}

contactRouter.post('/add', async (req, res) => {
  try {
    let newContact = new contact({ ...req.body })
    let result = await newContact.save()
    res.send({ contact: result, msg: 'contact tzad' })
  } catch (error) {
    console.log(error)
    res.status(400).send({ msg: '7el 3younek' })
  }
})

// delete contact
// methode delete
// path http://localhost:5000/contact/id
// body {name, email, phone}

contactRouter.delete('/:id', async (req, res) => {
  try {
    let result= await contact.deleteOne({ _id:req.params.id})
    result.deletedCount ? res.send('how tfassa5'):console.log('mouch mawjoud')
  } catch (error) {
    console.log(error)
    res.status(400).send({ msg: '7el 3younek' })
  }
})

// get contact
// methode get
// path http://localhost:5000/contact/
// body

contactRouter.get('/', async (req, res) => {
  try {
    let result= await contact.find()
    res.send(result);
  } catch (error) {
    console.log(error)
    res.status(400).send({ msg: '7el 3younek' })
  }
})

module.exports=contactRouter;