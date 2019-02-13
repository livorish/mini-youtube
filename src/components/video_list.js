import React from "react";
import "../style/style.css";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoList = props.video.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });

  return <ul className="col-md-12 list-group">{videoList}</ul>;
};
export default VideoList;