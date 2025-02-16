# PlayNet

## Overview
PlayNet is a scalable video streaming platform that provides a seamless user experience for video consumption, similar to Netflix and YouTube. The platform covers large-scale distributed systems and involves video encoding, cloud storage, and streaming optimization.

## Why PlayNet?
- **Large-Scale Distributed Systems**: Learn and implement concepts related to distributed systems.
- **Video Encoding & Streaming**: Gain hands-on experience with video processing and streaming technologies.
- **CDN, Caching, and Load Balancing**: Understand and implement strategies for efficient content delivery.

## Tech Stack
- **Frontend**: React.js / Next.js (for UI)
- **Backend**: Node.js (Express) / Python (FastAPI)
- **Database**: PostgreSQL (metadata), Redis (caching)
- **Storage**: AWS S3 / Google Cloud Storage (for videos)
- **Streaming**: FFmpeg (for video encoding), HLS / DASH (adaptive streaming)
- **Load Balancing**: Nginx / AWS CloudFront
- **Authentication**: Firebase Auth / OAuth

## Architecture
1. User uploads video → Video stored in AWS S3
2. Backend triggers FFmpeg → Convert to multiple resolutions (144p, 360p, 720p, 1080p)
3. Videos served via CDN for low-latency streaming
4. DASH/HLS streaming ensures adaptive bitrate
5. User analytics (watch time, likes, views) stored in the database

## Bonus Features
- AI-based recommendation engine (collaborative filtering)
- Live streaming support using WebRTC
- Multi-device resume playback feature

## Roadmap
- **Phase 1**: Set up file upload & storage
- **Phase 2**: Implement video transcoding & streaming
- **Phase 3**: Deploy with CDN & optimize load balancing
- **Phase 4**: Add analytics & AI-based recommendations

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- Redis
- FFmpeg
- AWS Account (for S3 and CloudFront)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/harjas-romana/play-net.git
   cd play-net
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up your database and Redis instance.

4. Configure environment variables:
   - Create a `.env` file in the backend directory and add your configuration settings (e.g., database connection, AWS credentials).

5. Start the backend server:
   ```bash
   node server.js
   ```

6. For the frontend, navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

7. Start the frontend server:
   ```bash
   npm start
   ```

## Usage
- Users can upload videos to be processed and stored in AWS S3.
- The platform supports adaptive streaming using HLS/DASH.
- User analytics are collected to improve the recommendation engine.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.


## Acknowledgments
- [FFmpeg](https://ffmpeg.org/) for video processing
- [AWS](https://aws.amazon.com/) for cloud storage and CDN services
- [React](https://reactjs.org/) and [Node.js](https://nodejs.org/) for building the application

---
