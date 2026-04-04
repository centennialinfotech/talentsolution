const express = require('express');
const router = express.Router();
const {
    applyToJob,
    getMyApplications,
    getJobApplications,
    updateApplicationStatus,
    getApplicationById,
    getAllCandidates,
    deleteApplication
} = require('../controllers/applicationController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Admin routes (Put these above /:id to avoid collision)
router.get('/admin/candidates', protect, adminOnly, getAllCandidates);
router.get('/job/:jobId', protect, adminOnly, getJobApplications);
router.put('/:id/status', protect, adminOnly, updateApplicationStatus);
router.delete('/:id', protect, adminOnly, deleteApplication);

// Shared routes
router.get('/:id', protect, getApplicationById);

// User routes
router.post('/', protect, applyToJob);
router.get('/my/all', protect, getMyApplications);

module.exports = router;
