import axios from "axios";

export const retrieveVideoData = (videoID) => {
  axios
    .get(`/api/videos/${videoID}/reactions`)
    .then((data) => data)
    .catch(err => console.log("error: ", err));
}