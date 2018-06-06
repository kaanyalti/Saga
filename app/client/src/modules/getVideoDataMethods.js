import axios from "axios";

export const retrieveVideoData = (videoID) => {
  axios
    .get(`/api/videos/${videoID}/reactions`)
    .then(() => console.log("Successfully got video reactions data"))
    .catch(err => console.log("error: ", err));
}