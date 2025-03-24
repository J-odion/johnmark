import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { LuMail, LuMoveRight } from "react-icons/lu";

export default function FooterSection() {
  return (
    <section id="contact" className="relative pt-10 w-full bg-[#161616]">
      <div className="relative my-2  w-full pt-10 bg-[] rounded-3xl flex flex-col justify-between items-center  mx-auto ">
        <div className="relative text-[#5C5C5C] flex flex-col justify-between w-full lg:w-[1280px]  h-full py-6 items-center z-10 ">
          <div className="relative w-full mt-8 gap-6 px-14 backdrop-blur-sm ">
            <div className=" z-50 flex flex-col lg:flex-row justify-between w-full text-[#5C5C5C] gap-8 ">
              <div className="flex flex-col w-full justify-center ">
                <div className=" flex flex-col w-full justify-center items-center lg:flex-row gap-x-16 ">
                  <div className="flex items-center border border-[#5C5C5C] rounded-lg justify-center py-4 px-8 gap-[24px] ">
                    <p className=" text-xl font-bold">Stream on Netflix</p>
                    <Image
                      src="/assets/netflix.png"
                      width={80}
                      height={60}
                      className=" rounded-[20px] shadow-lg bg-transparent mx-auto cursor-pointer"
                      alt="Hero Image"
                    />
                  </div>
                  <div className="flex items-center flex-col gap-6 border border-[#5C5C5C] rounded-lg justify-center py-4 px-8 ">
                    <p className=" text-xl font-bold ">Socials</p>
                    <div className="flex items-center gap-[44px]  ">
                      <a
                        href="https://www.instagram.com/travel.albatross"
                        className="text-[16px] leading-[20px] font-normal "
                      >
                        <FaInstagram color="#5C5C5C" size={30} />
                      </a>
                      <a
                        href="https://www.facebook.com/"
                        className="text-[16px] leading-[20px] font-normal "
                      >
                        <FaFacebook color="#5C5C5C" size={30} />
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        className="text-[16px] leading-[20px] font-normal "
                      >
                        <FaYoutube color="#5C5C5C" size={30} />
                      </a>
                      <a
                        href="https://www.twitter.com/"
                        className="text-[16px] leading-[20px] font-normal "
                      >
                        <FaTiktok color="#5C5C5C" size={30} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col w-full justify-center my-6 mx-auto text-[#5C5C5C]">
                  <div className="flex  w-full justify-center text-[#5C5C5C] gap-4">
                    <p className=" z-50 text-[16px] leading-[20px] font-normal ">
                      Privacy Policy
                    </p>
                    <p className=" z-50 text-[16px] leading-[20px] font-normal ">
                      Terms and conditions
                    </p>
                  </div>
                  <p className="z-50 text-[16px] text-center my-4 mt-8 leading-[20px] font-normal ">
                    © 2024 Accross The Valley. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
