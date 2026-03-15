const mongoose = require('../db/conn')
const {Schema} = mongoose

const User = mongoose.model(
    'User',
    new Schema ({
        name: {
            typeof: String,
            required: true
        },
        email: {
            typeof: String,
            required: true
        },
        password: {
            typeof: String,
            required: true
        },
        image: {
            typeof: String
        },
        phone: {
            typeof: String,
            required: true
        }
    },{timestamps: true})
)

module.exports = User