"use client";
import ImageCard from "./Image";

export default function ImageGallery() {
  const topImage=["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg", "/assets/4.jpg", "/assets/5.jpg", "/assets/6.jpg","/assets/7.jpg","/assets/8.jpg","/assets/9.jpg","/assets/10.jpg"]

  return (
    <section className="px-10 py-[60px] gap-4 w-full justify-center flex flex-col ">
      <div id="about-us" className=" w-[80%] grid gap-4 grid-cols-3 mx-auto">
      {topImage.map((image)=> <ImageCard src={image} />)}
      </div>
    </section>
  );
}
