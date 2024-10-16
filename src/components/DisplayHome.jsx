import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="font-bold text-2xl my-5">Featerd charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              id={item.id}
              name={item.name}
              image={item.image}
              key={index}
              desc={item.desc}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="font-bold text-2xl my-5">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
