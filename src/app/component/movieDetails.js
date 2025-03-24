"use client";
import Image from "next/image";
import FlowThree from "./FlowThree";
import TitlesFlow from "./Titles";
import { LuMail } from "react-icons/lu";
import { useState } from "react";

export default function MovieDetails() {
  const details = [
    {
      title: "Title",
      data: "Across the Valley",
    },
    {
      title: "Release Date",
      data: "To be stated",
    },
    {
      title: "Genre",
      data: "Romantic Drama, Thriller",
    },
    {
      title: "Director",
      data: "Johnmark Mhenga Iyoo",
    },
    {
      title: "Cast",
      data: "View cast section",
    },
    {
      title: "Duration",
      data: "To be stated",
    },
    {
      title: "Rating",
      data: "PG-13",
    },
    {
      title: "Language",
      data: "English",
    },
    {
      title: "Synopsis",
      data: `In a world divided by a vast valley, two souls find themselves caught in the tides of fate. *Ella, a talented artist from the bustling city, seeks inspiration in the serene landscapes of her childhood. Meanwhile, **David*, a rugged and introspective farmer, longs for connection beyond the borders of his isolated life. When their paths cross, they discover an undeniable bond that defies the obstacles separating them.
            As they navigate their feelings amidst societal expectations and personal doubts, Ella and David must decide whether love is worth the risks that come with crossing the valley.`,
    },
    {
      title: "Platform Availability",
      data: "Netflix, Amazon Prime Video, Youtube",
    },
  ];
  const themes = [
    "Love",
    "Sacrifice",
    "Hope",
    "Redemption",
    "Connection",
    " Distance",
  ];
  const intro = [
    "Welcome to the official blog for Across the Valley: Love on the Other Side, a heartfelt romantic drama that explores the transcendent power of love, the challenges of distance, and the beauty of second chances. I’m Johnmark Mhenga Iyoo, the writer and director, and I’m thrilled to share this journey with you",
  ];

  return (
    <section  className="px-10 py-[60px]  w-full justify-center flex flex-col ">
      <div className="w-[80%] py-4 mx-auto flex flex-col gap-4">
        {intro.map((note) => (
          <p className="text-xl font-normal ml-6 mb-8">{note}</p>
        ))}
        <div className="flex px-10 gap-4">
          {themes.map((theme) => (
            <p className="border-4 rounded-full py-2 px-4 space-x-8 font-medium text-sm leading-6  ">
              {theme}
            </p>
          ))}
        </div>
      </div>
      {details.map((item, index) => (
        <div
          key={index}
          className=" w-[80%] border-t-2 border-b-2 py-4 flex px-6 mx-auto"
        >
          <p className="text-xl font-bold">
            {item.title}:
            <span className="text-xl font-normal ml-6">{item.data}</span>{" "}
          </p>
        </div>
      ))}
    </section>
  );
}
