import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Video {
  videoUrl: string;
  title: string;
  description: string;
}
import VideoJS from "video.js";
import Hls from "hls.js";

const VideoPage = () => {
  const { id } = useParams(); // Get Video ID from URL
  const [video, setVideo] = useState<Video | null>(null);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/video/${id}`)
      .then(res => setVideo(res.data))
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    if (video?.videoUrl) {
      const videoElement = document.getElementById("video-player") as HTMLVideoElement;
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(video.videoUrl);
        hls.attachMedia(videoElement);
      } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
        videoElement.src = video.videoUrl;
      }
    }
  }, [video]);

  return (
    <div className="container mx-auto p-4">
      {video ? (
        <>
          <h2 className="text-2xl font-bold">{video.title}</h2>
          <video id="video-player" controls className="w-full h-96" />
          <p className="mt-2">{video.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoPage;