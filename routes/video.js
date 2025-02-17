import express from 'express';
import Video from '../models/Video.js';

const router = express.Router();

//Get Video Details
router.get('/', async (req, res) => {
    try{
        const videos = await Video.findById(req.params.id);

        if(!video){
            res.status(404).json({message: "Video not found"});
        }

        res.status(200).json(video);
    } catch(err) {
        res.status(500).json({message: "Server Error"});
    }
});
export default router;