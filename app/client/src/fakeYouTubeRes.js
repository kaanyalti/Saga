// Some YouTube Data for testing purposes

const videoIDs = {
  videoIDs: [
    { id: "QJO3ROT-A4E", title: "What Makes You Beautiful" },
    { id: "Jwgf3wmiA04", title: "Drag Me Down" },
    { id: "W-TE_Ys4iwM", title: "Story of My Life" },
    { id: "o_v9MY_FMcw", title: "Best Song Ever" },
    { id: "AbPED9bisSc", title: "Live While We're Young" },
    { id: "Y1xs_xPb46M", title: "One Thing" }
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
