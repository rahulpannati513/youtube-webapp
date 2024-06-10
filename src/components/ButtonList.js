import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
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
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
