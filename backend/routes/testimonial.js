const express = require('express');
const Testimonial = require('../models/Testimonial');
const router = express.Router();

// GET: Fetch testimonials
router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// POST: Add a new testimonial
router.post('/', async (req, res) => {
    try {
        const { name, testimonial } = req.body;
        const newTestimonial = new Testimonial({ name, testimonial });
        await newTestimonial.save();
        res.status(201).json({ success: true, message: 'Testimonial added successfully' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
