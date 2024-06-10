import React from "react";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";
import MainContainer from "./MainContainer";

const Body = () => {
  const buttons = [
    "All",
    "Live",
    "Gaming",
    "Music",
    "Sports",
    "News",
    "Learning",
    "Radio",
    "Podcasts",
    "Movies",
    "TV Shows",
    "Kids",
    "Unlisted",
    "Private",
    "Scheduled",
  ];

  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
