const mongoose = require('mongoose');

//costumer Schema
const customerSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String},
    email: { type: String}
});

//Define and export
module.exports = mongoose.model('customer', customerSchema);