"use client";
import Image from "next/image";
import FlowThree from "./FlowThree";
import TitlesFlow from "./Titles";
import { LuMail } from "react-icons/lu";
import { useState } from "react";

export default function Storyline() {
  const details = [
    {
      title: "Title",
      data: "Inception",
    },
    {
      title: "Release Date",
      data: "July 16, 2010",
    },
    {
      title: "Genre",
      data: "Science Fiction, Thriller",
    },
    {
      title: "Director",
      data: "Christopher Nolan",
    },
    {
      title: "Cast",
      data: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    },
    {
      title: "Duration",
      data: "2h 28m",
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
      data: "In a world divided by a vast valley, two souls find themselves caught in the tides of fate. *Ella, a talented artist from the bustling city, seeks inspiration in the serene landscapes of her childhood. Meanwhile, **David*, a rugged and introspective farmer, longs for connection beyond the borders of his isolated life. When their paths cross, they discover an undeniable bond that defies the obstacles separating them. As they navigate their feelings amidst societal expectations and personal doubts, Ella and David must decide whether love is worth the risks that come with crossing the valley.",
    },
    {
      title: "Platform Availability",
      data: "Netflix, Amazon Prime Video",
    },
  ];

  return (
    <section className="px-10 py-[60px]  w-full justify-center flex flex-col ">
      {details.map((item, index) => (
        <div
          key={index}
          className=" w-[80%] border-t-2 border-b-2 py-4 flex px-6 mx-auto"
        >
          <p className="text-xl font-normal ml-6">{item.data}</p>
        </div>
      ))}
    </section>
  );
}
