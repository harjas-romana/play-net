import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGOOSE_URI, {useNewURLParser: true, useUnifiedTopology: true})
.then(() => console.log("MongoDB is connected!!"))
.catch((err) => console.log(err));


app.get('/', (req, res) => res.send("Video Streaming API is running"));

const PORT = process.env.PORT || 5173;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

