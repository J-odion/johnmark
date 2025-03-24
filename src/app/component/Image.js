"use client";
import Image from "next/image";
import React, { useState } from "react";

function ImageCard({ src }) {

  const image = "";
  const [showImage, setShowImage] = useState(false);

  const handleOpenImage = () => setShowImage(true);
  const handleCloseImage = () => setShowImage(false);

  return (
    <>
      <div className="w-full relative rounded-md p-4 text-black">
        <div onClick={handleOpenImage} className="w-full rounded-2xl h-full  cursor-pointer">
          <Image
            src={src}
            width={100}
            height={60}
            className=" w-full h-[200px] object-center object-cover rounded-[20px] shadow-lg bg-transparent "
            alt="Hero Image"
          />
        </div>
      </div>

      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={handleCloseImage}
          >
            &times;
          </button>
          <img
            src={src}
            controls
            className="w-[90%] lg:w-[70%] h-auto"
          />
        </div>
      )}
    </>
  );
}

export default ImageCard;
