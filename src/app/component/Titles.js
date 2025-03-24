import React from "react";
import { LuMoveRight } from "react-icons/lu";

export default function TitlesFlow({ title, desc }) {
  return (
    <div className="flex flex-col gap-8 lg:justify-between items-start lg:flex-row w-full justify-around ">
      <div className="w-full  flex justify-between flex-col gap-[32px] ">
        <div className="w-full flex flex-col  border-l-8 pl-4 border-[#AD6942]">
          <p className="text-[36px] w-full font-bold lg:w-[40%] lg:text-[48] leading-[54px] ">
            {title}
          </p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
