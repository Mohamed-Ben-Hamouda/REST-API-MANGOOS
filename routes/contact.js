const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')


//ajout
router.post('/newcontact', (req, res) => {
    const { name, email, phone } = req.body
    let newContact = new Contact({ name, email, phone })
    newContact.save()
        .then(() => res.send('contact ajouter'))
        .catch(err => console.error(err.message))

})
//get contacts
router.get('/allcontact', (req, res) => {
    Contact.find()
        .then(contact => res.json(contact))
        .catch(err => console.error(err.message))
})
//get one contact
// router.get('/one/:id', (req, res) => {
//     Contact.findById(req.params.id)
//         .then(contact => res.json(contact))
//         .catch(err => console.error(err.message))
// })
//del
router.delete('/deletecontact/:id', (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .then(contact => res.json('contact suprimer'))
        .catch(err => console.error(err.message))

})
//edit
router.put('/editcontact/:id', (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body)
        .then(contact => res.json('contact modifier'))
        .catch(err => console.error(err.message))
})


module.exports = router