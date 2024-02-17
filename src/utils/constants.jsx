export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + GOOGLE_API_KEY;

export const VIDEO_DETAILS = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='; 

export const VIDEO_COMMENT = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=' 
