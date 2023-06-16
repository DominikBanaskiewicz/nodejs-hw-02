// const fs = require('fs/promises')
const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "../models/contacts.json");

const listContacts = async () => {
  try {
    return fs.readFileSync(contactsPath);
  } catch (err) {
    console.log(err.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = JSON.parse(fs.readFileSync(contactsPath));
    const searchContact = contacts.find((elem) => (elem.id = contactId));
    console.log(searchContact);
    return searchContact;
  } catch (err) {
    console.log(err.message);
  }
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
