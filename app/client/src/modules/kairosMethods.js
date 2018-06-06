import axios from "axios";

export const uploadKairos = (videoToken, youtubeVideoID) => {
  axios
    .get(
      `/api/kairos?kairos_method=upload&video_token=${videoToken}&youtube_video_id=${youtubeVideoID}`
    )
    .then(response => console.log("successfully connected to the server"))
    .catch(err => console.log("error: ", err));
};

export const retrieveKairos = () => {
  axios
    .get("/api/kairos?kairos_method=retrieve")
    .then(() => console.log("successfully connected to the server"))
    .catch(err => console.log("error: ", err));
};
