// Some YouTube Data for testing purposes

const videoIDs = {
  videoIDs: [
        {
          channelTitle: "Corrina Chow",
          description:
            "Morbi finibus vehicula enim, nec hendrerit ex pulvinar a. Vivamus in imperdiet augue, et condimentum lectus. Phasellus consectetur massa metus, a suscipit purus auctor id. Proin scelerisque interdum odio, eu mattis mi vulputate ut. Donec cursus felis eu egestas bibendum. Pellentesque in interdum augue, pretium dictum dolor. Duis dui nisi, tempus nec nisi eget, feugiat finibus turpis.",
          id: "Dr9C2oswZfA",
          publishedAt: "2018-06-05T20:29:22.000Z",
          statistics: {
            commentCount: "324793",
            dislikeCount: "3247",
            favoriteCount: "0",
            likeCount: "342",
            viewCount: "32897487324732"
          },
          thumbnail: {
            height: 720,
            url: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            width: 1280
          },
          title: "For Bigger Blazes"
        }
      ],
  all: function() {
    return this.videoIDs;
  },
  get: function(id) {
    const isVideo = v => v.id === id;
    return this.videoIDs.find(isVideo);
  }
};

export default videoIDs;
