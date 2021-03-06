const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
    name: {
        type: String
    },
    occupation: {
        type: String,
        default: 'Unknown'
    },
    catchPhrase: {
        type: String
    }
}, {
    timestamps: true
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity