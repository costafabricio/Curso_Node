const mongoose = require('../db/conn')
const {Schema} = mongoose

const Pet = mongoose.model(
    'Pet',
    new Schema ({
        name: {
            typeof: String,
            required: true
        },
        age: {
            typeof: Number,
            required: true
        },
        weight: {
            typeof: Number,
            required: true
        },
        color: {
            typeof: String,
            required: true
        },
        images: {
            typeof: Array,
            required: true
        },
        available: {
            typeof: Boolean
        },
        user: Object,
        adopter: Object
    },{timestamps: true})
)

module.exports = Pet