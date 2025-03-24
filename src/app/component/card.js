"use client";
import Image from "next/image";
import React, { useState } from "react";

function CardComp({thumbnail , video }) {
  const [showVideo, setShowVideo] = useState(false);
  const handlePlayVideo = () => setShowVideo(true);
  const handleCloseVideo = () => setShowVideo(false);

  return (
    <>
      <div className="w-full relative rounded-md p-4 text-black">
        <div onClick={handlePlayVideo} className="w-full rounded-2xl h-full  cursor-pointer">
          <Image
            src={thumbnail}
            width={100}
            height={60}
            className="  w-full  rounded-[20px] shadow-lg bg-transparent "
            alt="Hero Image"
          />
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black  bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={handleCloseVideo}
          >
            &times;
          </button>
          <video
            src={video}
            controls
            autoPlay
            className="w-[90%] lg:w-[70%] h-auto"
          />
        </div>
      )}
    </>
  );
}

export default CardComp;
