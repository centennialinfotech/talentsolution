const { cloudinary } = require('../config/cloudinary');

// @desc    Upload resume to Cloudinary
// @route   POST /api/upload/resume
// @access  Private/User
exports.uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const ext = req.file.originalname ? req.file.originalname.split('.').pop() : 'pdf';

        // We use cloudinary.uploader.upload_stream to upload the buffer directly
        const stream = cloudinary.uploader.upload_stream(
            { 
                folder: 'resumes', 
                resource_type: 'raw',
                public_id: `resume_${Date.now()}.${ext}`
            },
            (error, result) => {
                if (error) {
                    console.error('Cloudinary upload error:', error);
                    return res.status(500).json({ message: 'Error uploading to Cloudinary' });
                }
                // Cloudinary returns secure_url which might default to /image/upload/ for PDFs sometimes if not careful,
                // so we explicitly format it to /raw/upload/ to ensure PDF accessibility
                const rawUrl = result.secure_url.replace('/image/upload/', '/raw/upload/');
                
                res.status(200).json({
                    message: 'Upload successful',
                    url: rawUrl,
                    public_id: result.public_id
                });
            }
        );

        stream.end(req.file.buffer);

    } catch (error) {
        console.error('Upload controller error:', error);
        res.status(500).json({ message: error.message });
    }
};
