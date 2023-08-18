type videoProps = {
  id: any;
  embed: string;
}[];

enum idVideo {
  id,
}
export const Videos: videoProps = [
  {
    id: idVideo,
    embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ga-MniJxQz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },

  {
    id: idVideo,
    embed: `https://www.youtube.com/embed/1I9ADpXbD6c`,
  },

  {
    id: idVideo,
    embed: ``,
  },

  {
    id: idVideo,
    embed: ``,
  },

  {
    id: idVideo,
    embed: ``,
  },

  {
    id: idVideo,
    embed: ``,
  },
  {
    id: idVideo,
    embed: ``,
  },

  {
    id: idVideo,
    embed: ``,
  },
  {
    id: idVideo,
    embed: ``,
  },

  {
    id: idVideo,
    embed: ``,
  },
];

console.log("Video :", Videos);
