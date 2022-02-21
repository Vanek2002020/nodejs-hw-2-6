const contacts = require('../../models/contacts');

//  GET /api/products

const getContacts = async(req, res, next) => {
    try {
        const data = await contacts.listContacts();
        res.json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = getContacts;