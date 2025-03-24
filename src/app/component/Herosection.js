"use client";
import Image from "next/image";
import { useState } from "react";
import { LuMoveRight, LuVideotape } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => setShowVideo(true);
  const handleCloseVideo = () => setShowVideo(false);

  return (
    <section className="flex flex-col h-[70vh] overflow-y-hidden justify-center bg-[#161616] py-2 items-center lg:items-start relative md:flex-row w-full ">
      <div className=" flex w-[30%] flex-col h-full justify-center  lg:justify-start items-center lg:items-start">
        <Image
          src="/assets/poster.jpg"
          width={200}
          height={100}
          className=" w-full shadow-md object-contain  cursor-pointer"
          alt="Hero Image"
        />
      </div>

      <div className="relative w-2/3 h-full bg-slate-500 flex ">
        <Image
          src="/assets/hero.png"
          width={200}
          height={200}
          className=" w-full object-cover shadow-lg bg-transparent mx-auto "
          alt="Hero Image"
        />
        <div
          className="absolute inset-0 cursor-pointer flex items-end justify-start m-4"
          onClick={handlePlayVideo}
        >
          <div className="flex justify-center gap-4 items-center">
          <FaPlay
            size={40}
            className="text-white bg-[#ad6942]  rounded-full p-2 text-4xl opacity-75"
          />
          <p className="text-white font-boldtext-xl opacity-75">Watch Thriller</p>
          <p className="text-white font-light  text-sm opacity-75">Time: 01:23</p>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={handleCloseVideo}
          >
            &times;
          </button>
          <video
            // src="/assets/videos/Trailer.mp4"
            src="https://youtu.be/OmipTQiClSQ"
            controls
            autoPlay
            className="w-[90%] lg:w-[70%] h-auto"
          />
        </div>
      )}
    </section>
  );
}
