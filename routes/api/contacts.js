const express = require("express");
const ContactsFunc = require("../../models/contacts");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const contactList = await ContactsFunc.listContacts();
  res.send(JSON.parse(contactList));
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const singlecontact = await ContactsFunc.getContactById(contactId);
  res.send(singlecontact);
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
