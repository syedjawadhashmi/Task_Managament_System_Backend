const db = require('_helpers/db');
const Customer = db.Customer;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Customer.find();
}

async function getById(id) {
    return await Customer.findById(id);
}

async function create(custParam) {
    // validate
    if (await Customer.findOne({ name: custParam.name })) {
        throw 'Customer name "' + custParam.name + '" is already taken';
    }

    const customer = new Customer(custParam);

    // save customer
    await customer.save();
}

async function update(id, custParam) {
    const customer = await Customer.findById(id);

    // validate
    if (!customer) throw 'Customer not found';
    if (customer.name !== custParam.name && await Customer.findOne({ name: custParam.name })) {
        throw 'Customer name "' + custParam.name + '" is already taken';
    }

    // copy custParam properties to customer
    Object.assign(customer, custParam);

    await customer.save();
}

async function _delete(id) {
    await Customer.findByIdAndRemove(id);
}