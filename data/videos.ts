type videoProps = {
  id: any;
  embed: string;
};

enum idVideo {
  id,
}
export const Videos: videoProps = {
  id: idVideo,
  embed: ``,
};

console.log("Video :", Videos.id);
