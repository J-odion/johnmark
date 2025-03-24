"use client";
import Image from "next/image";
import FlowThree from "./FlowThree";
import TitlesFlow from "./Titles";
import { LuMail } from "react-icons/lu";
import { useState } from "react";
import CardComp from "./card";

export default function VideoClips() {
  const videoMan = [
    {
      video: "https://youtu.be/3uCpCww6O9Q",
      thumbnail: "/assets/thumbnail/1.png"
    },
    {
      video: "https://youtu.be/3gvtGW0Vo7A",
      thumbnail: "/assets/thumbnail/2.png"
    },
    {
      video: "https://youtu.be/wyRuqro1eHA",
      thumbnail: "/assets/thumbnail/3.png"
    },
    {
      video: "https://youtu.be/bOsy7TmBu-U",
      thumbnail: "/assets/thumbnail/4.png"
    },{
      video: "https://youtu.be/4rpa_vWIgUE",
      thumbnail: "/assets/thumbnail/1.png"
    },
    {
      video: "https://youtu.be/OmipTQiClSQ",
      thumbnail: "/assets/thumbnail/2.png"
    }
  ]

  return (
    <section className="px-10 py-[60px]  w-full justify-center flex flex-col ">
      <div  className=" w-[80%] grid gap-4 grid-cols-3 mx-auto">
        {videoMan.map((vid) => <CardComp thumbnail={vid.thumbnail} video={vid.video} />)}
      </div>
    </section>
  );
}
