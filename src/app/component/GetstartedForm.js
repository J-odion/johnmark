import React from "react";

export default function Getstarted({ tag, title, desc, btn }) {
  return (
    <div className="flex flex-col gap-8 lg:justify-between items-start lg:flex-row w-full justify-around ">
      <div className="w-full  flex justify-between flex-col gap-[32px] ">
        <div className="flex w-full  h-[40px]">
          <div className="border border-[#F0F0F0] rounded-full px-[16px] flex justify-center items-center">
            <div className="w-[7.16px] h-[7.16px] bg-[#2FCC40] rounded-full"></div>
            <p className=" text-xl font-normal  text-[#2FCC40] px-[10px] p-1 text-center ">
              Apply Now
            </p>
            <div className="w-[7.16px] h-[7.16px] bg-[#2FCC40] rounded-full"></div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between">
          <p className="text-[36px] w-full lg:w-[40%] lg:text-[48] leading-[54px] ">
            It will only take a moment to initiate the process of getting the capital you need!
          </p>

          <div className="gap-10 flex lg:w-[679px]  flex-col">
            <p className="text-[#757575] text-xl font-normal leading-[26px] lg:text-[20px] ">
            To apply for your credit, provide the following information correctly.  
            </p>
            <button className="flex justify-center items-center leading-[20px] h-[52px] w-[150px]  bg-[#34C759] text-white font-[500] text-[16px] rounded-full ">
              {btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
