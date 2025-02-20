import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

const router = express.Router();


const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})


const upload = multer({
    storage: multerS3(
        {
            s3: s3,
            bucket: process.env.AWS_BUCKET_NAME,
            metadata: (req, file, cb) => 
                cb(null, {fieldName: file.fieldname}),
            key: (req, file, cb) => 
                cb(null, 'videos/${Date.now()}_${file.originalname}')
        }
    )
});

router.post('/', upload.single('video'), (req, res) => {
    res.json({message: "Video uploaded successfully"}, {videoUrl: req.file.location});
});

export default router;