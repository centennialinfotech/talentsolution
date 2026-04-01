const Admin = require('../models/Admin');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const paypal = require('@paypal/checkout-server-sdk');

/* --- CURRENT PAYMENT CODE START --- Title: Production Payment Gateways Setup
// Razorpay Setup
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_demokey123',
    key_secret: process.env.RAZORPAY_SECRET || 'rzp_test_demosecret'
});

// PayPal Setup
const environment = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID || 'sb-demo-client',
    process.env.PAYPAL_SECRET || 'sb-demo-secret'
);
const paypalClient = new paypal.core.PayPalHttpClient(environment);

exports.createRazorpayOrder = async (req, res) => {
    try {
        const { slots } = req.body;
        if (!slots || slots <= 0) return res.status(400).json({ message: 'Invalid slots' });

        const amount = slots * 50;
        const options = {
            amount: amount * 100, // in paise
            currency: 'INR',
            receipt: `receipt_order_${Date.now()}`
        };

        const order = await razorpay.orders.create(options);
        // Safely map key_id via fallback so frontend doesn't crash on undefined Env var
        res.json({ ...order, key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_demokey123' });
    } catch (err) {
        console.error("Razorpay Order Error:", err);
        let errorMsg = err.message || 'Razorpay order creation failed';
        if (err.statusCode && err.error && err.error.description) {
            errorMsg = `Razorpay API Error: ${err.error.description}. Please ensure valid RAZORPAY_KEY_ID and SECRET are in your .env.`;
        }
        res.status(500).json({ message: errorMsg });
    }
};

exports.verifyRazorpay = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, slots } = req.body;

        const body = razorpay_order_id + '|' + razorpay_payment_id;
        const secret = process.env.RAZORPAY_SECRET || 'rzp_test_demosecret';
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature === razorpay_signature) {
            const admin = await Admin.findById(req.user._id);
            admin.purchased_slots = (admin.purchased_slots || 0) + parseInt(slots, 10);
            await admin.save();

            res.status(200).json({ message: 'Payment verified successfully.' });
        } else {
            res.status(400).json({ message: 'Invalid signature. Payment could not be verified.' });
        }
    } catch (err) {
        console.error("Razorpay Verify Error:", err);
        res.status(500).json({ message: err.message });
    }
};

exports.createPaypalOrder = async (req, res) => {
    try {
        const { slots } = req.body;
        if (!slots || slots <= 0) return res.status(400).json({ message: 'Invalid slots' });

        const amount = slots * 50;
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer('return=representation');
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD', // Using USD because typical PayPal Sandboxes reject INR
                    value: (amount / 80).toFixed(2)
                },
                description: `Purchase ${slots} job slots`
            }],
            application_context: {
                brand_name: 'Centennial Infotech Platform',
                landing_page: 'NO_PREFERENCE',
                user_action: 'PAY_NOW',
                return_url: `http://localhost:3000/admin/dashboard?paypal_success=true&slots=${slots}`,
                cancel_url: `http://localhost:3000/admin/dashboard?paypal_success=false`
            }
        });

        const order = await paypalClient.execute(request);
        const approveLink = order.result.links.find(link => link.rel === 'approve');
        
        res.json({ approvalUrl: approveLink ? approveLink.href : null });
    } catch (err) {
        console.error("PayPal Order Error:", err);
        let errorMsg = err.message || 'PayPal order creation failed';
        if (err.statusCode && err.statusCode === 401) {
            errorMsg = `PayPal API Auth Error: Unauthorized. Please ensure valid PAYPAL_CLIENT_ID and SECRET are in your .env.`;
        }
        res.status(500).json({ message: errorMsg });
    }
};

exports.capturePaypal = async (req, res) => {
    try {
        const { token, slots } = req.body;
        
        const request = new paypal.orders.OrdersCaptureRequest(token);
        request.requestBody({});
        
        const capture = await paypalClient.execute(request);
        
        if (capture.result.status === 'COMPLETED') {
            const admin = await Admin.findById(req.user._id);
            admin.purchased_slots = (admin.purchased_slots || 0) + parseInt(slots, 10);
            await admin.save();
            
            res.status(200).json({ message: 'PayPal payment captured' });
        } else {
            res.status(400).json({ message: 'Capture not completed' });
        }
    } catch (err) {
        console.error("PayPal Capture Error:", err);
        res.status(500).json({ message: err.message });
    }
};
--- CURRENT PAYMENT CODE END --- */

exports.captureSandboxPayment = async (req, res) => {
    try {
        const { slots } = req.body;
        if (!slots || slots <= 0) return res.status(400).json({ message: 'Invalid slots' });

        const admin = await Admin.findById(req.user._id);
        admin.purchased_slots = (admin.purchased_slots || 0) + parseInt(slots, 10);
        await admin.save();

        res.status(200).json({ message: 'Sandbox payment successful.' });
    } catch (err) {
        console.error("Sandbox Payment Error:", err);
        res.status(500).json({ message: err.message });
    }
};

