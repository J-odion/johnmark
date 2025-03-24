"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

function ProfileCard({name, title}) {
  return (
    <>
      <div className="w-full relative rounded-md p-4 text-black">
        <div className="w-full flex flex-col justify-center items-center rounded-2xl h-full cursor-pointer">
          <FaUser color="#5C5C5C" size={60} />
          <h1 className="text-sm  mt-2">{name}</h1>
          <h1 className="text-sm font-bold ">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
