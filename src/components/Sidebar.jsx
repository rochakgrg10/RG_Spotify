import React from "react";
import { assets } from "../assets/assets";

function Sidebar() {
  return (
    <div className="w-[25%] h-full p-2 lg:flex flex-col gap-2 hidden text-white">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex gap-3 items-center pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex gap-3 items-center pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="h-[85%] rounded bg-[#121212]">
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold">
          <h1>Create Your first playlist</h1>
          <p className="font-light">It's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-black mt-4 rounded-full font-bold">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold mt-4">
          <h1>Let's findsome podcasts to follow</h1>
          <p className="font-light">We'll keep you update on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-black mt-4 rounded-full font-bold">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
