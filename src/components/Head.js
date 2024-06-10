import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utlis/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png"
        />
        <a href="/">
          <img
            className="h-8 mx-2 "
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
          />
        </a>
      </div>
      <div className=" ">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 col-span-10 px-5 p-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1 ">
        <img
          className="h-8"
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Head;
