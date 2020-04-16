const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('ContactCollection', ContactSchema)