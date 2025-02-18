const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
    title: String,
    videoUrl: String,
    subtitles: String,
    sentiment: String,
});

module.exports = mongoose.model("Video", VideoSchema);