const mongoose = require('mongoose');

//Map global promise
mongoose.Promise = global.Promise;
//connect to db
const db = mongoose.connect('mongodb://localhost/costumercli');
//import model
const Customer = require('./models/customer');

//Add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
    });
}

//find customer
const findCustomer = (name) => {
    //Make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]}).then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
    });
}

//update customer
const updateCustomer = (_id, customer) => {
    Customer.update({ _id }, customer)
        .then(customer => {
            console.info('Customer Updated');
        });
}

//remove customer
const removeCustomer = (_id, customer) => {
    Customer.remove({ _id }, customer)
        .then(customer => {
            console.info('Customer Removed');
        });
}

//List customers
const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} customers`);
        });
}

//Export all methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
};