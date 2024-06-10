import React, { useEffect } from "react";
import { YOUTUBE_API_KEY } from "../utlis/constants";

const VideoContainer = () => {
  useEffect =
    (() => {
      getVideos();
    },
    []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json);
  };

  return <div className="bg-red-500">VideoContainer</div>;
};

export default VideoContainer;
