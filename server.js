const express = require('express')
const mongoose = require('mongoose')
// const contact = require('./routes/contact')
const app = express()
app.use(express.json())
const mongo_URI = "mongodb+srv://mbh123:mbh123@contact-list-jrefq.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongo_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        throw err
    }
    else {
        console.log('base de donnee connectee sur cloud')
    }
})
//definies les routes chaque fichier de crude a son propre middelware
app.use('/rest', require('./routes/contact'))
app.listen(5000, (err) => {
    if (err) {
        throw err
    }
    else {
        console.log('serveur démarrer sur le port 5000')
    }
})