const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// POST: Create a new contact entry
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ success: true, message: 'Contact saved successfully' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
