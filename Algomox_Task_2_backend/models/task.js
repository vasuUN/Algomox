const mongoose = require('mongoose')

//Database conectivity 
const taskAttribute = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: false,
    }

})

module.exports = mongoose.model('Task',taskAttribute)