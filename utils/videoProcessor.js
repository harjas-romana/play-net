//Convert Video into multiple resolutions


import { resolve } from "dns";
import ffmpeg from "ffmpeg";
import path from "path";

const ProcessVideo = (inputPath, outputPath) => {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
        .outputOptions(['-vf scale=640:360', '-c:v libx264', '-b:v 800k', '-preset fast',
                '-hls_time 10', '-hls_list_size 0', '-f hls'])
                .output(path.join(outputPath, output.m3u8))
                .on('end', () => resolve("Video Processing is Completed"))
                .on('error', () => reject("Error in Video Processing"))
                .run();
            });
        };
export default ProcessVideo;