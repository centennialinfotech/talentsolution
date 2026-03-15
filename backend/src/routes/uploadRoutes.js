const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadResume } = require('../controllers/uploadController');
const { protect } = require('../middleware/authMiddleware');

// Configure multer to store files in memory as buffer
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        // Accept only PDF and doc files
        if (
            file.mimetype === 'application/pdf' ||
            file.mimetype === 'application/msword' ||
            file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ) {
            cb(null, true);
        } else {
            cb(new Error('Only .pdf, .doc and .docx format allowed!'), false);
        }
    }
});

// @route   POST /api/upload/resume
// @access  Private/User
// Note: We protect this route so only authenticated users can upload
router.post('/resume', protect, upload.single('resume'), uploadResume);

module.exports = router;
