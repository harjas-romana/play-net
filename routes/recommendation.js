import express from 'express';
import Video from '../models/Video.js';

const router = express.Router();

router.get('/:emotion', async (req, res) => {
    try {
        const videos = await Video.find({sentiment: req.params.emotion}).limit(5);
        res.json(videos);
    } catch (err){
        res.status(500).json({ error: "Error fetching recommendations"});
    }
});

export default router;