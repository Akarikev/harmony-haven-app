type videoProps = {
  id: any;
  embed: string;
}[];

enum idVideo {
  id,
  cd,
}

export const Videos: videoProps = [
  {
    id: idVideo.id,
    embed: `https://www.youtube.com/embed/ga-MniJxQz8`,
  },

  {
    id: idVideo.cd,
    embed: `https://www.youtube.com/embed/1I9ADpXbD6c`,
  },

  // {
  //   id: idVideo,
  //   embed: ``,
  // },

  // {
  //   id: idVideo,
  //   embed: ``,
  // },

  // {
  //   id: idVideo,
  //   embed: ``,
  // },

  // {
  //   id: idVideo,
  //   embed: ``,
  // },
  // {
  //   id: idVideo,
  //   embed: ``,
  // },

  // {
  //   id: idVideo,
  //   embed: ``,
  // },
  // {
  //   id: idVideo,
  //   embed: ``,
  // },

  // {
  //   id: idVideo,
  //   embed: ``,
  // },
];

console.log(Videos);

// <iframe width="560" height="315" src="https://www.youtube.com/embed/ga-MniJxQz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
