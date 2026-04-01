const express = require('express');
const router = express.Router();
const { 
    createRazorpayOrder, 
    verifyRazorpay, 
    createPaypalOrder, 
    capturePaypal,
    captureSandboxPayment
} = require('../controllers/paymentController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

/* --- CURRENT PAYMENT CODE START --- Title: Production Payment Routes
router.post('/create-razorpay-order', protect, adminOnly, createRazorpayOrder);
router.post('/verify-razorpay', protect, adminOnly, verifyRazorpay);
router.post('/create-paypal-order', protect, adminOnly, createPaypalOrder);
router.post('/capture-paypal', protect, adminOnly, capturePaypal);
--- CURRENT PAYMENT CODE END --- */

router.post('/capture-sandbox', protect, adminOnly, captureSandboxPayment);

module.exports = router;
