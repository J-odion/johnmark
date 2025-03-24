import Navbar from "./component/Header";
import Hero from "./component/Herosection";
import FooterSection from "./component/Footer";
import TitlesFlow from "./component/Titles";
import VideoClips from "./component/InfoTop";
import ImageGallery from "./component/ImageGallery";
import CastsCrew from "./component/CastsCrew";
import MovieDetails from "./component/movieDetails";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <div id="details" className=" py-[50px] px-[40px]">
        <TitlesFlow
          title={"Movie Details"}
          desc={"The introduction to the storyline"}
        />
        <MovieDetails />
      </div>
      <div id="videos" className=" py-[50px] px-[40px]">
        <TitlesFlow
          title={"Video Clips"}
          desc={`Creating "Across the Valley" has been an incredible journey. From the initial concept to the scriptwriting process and finally to filming, I have poured my heart into every frame. The stunning landscapes serve as a backdrop to our love story, symbolizing both the beauty and the challenges of love. I had the privilege of working with a talented cast and crew who shared my vision. Their dedication and passion have brought this story to life in ways I could only dream of. `}
        />
        <VideoClips />
      </div>
      <div id="gallery" className=" py-[50px] px-[40px]">
        <TitlesFlow
          title={"Image Gallery"}
          desc={" Enjoy our fabulous moments with us "}
        />
        <ImageGallery />
      </div>
      <div id="casts" className=" py-[50px] px-[40px]">
        <TitlesFlow
          title={"Casts and Crews"}
          desc={" See our casts and crews. Know your favourite people "}
        />
        <CastsCrew />
      </div>
      <FooterSection />
    </div>
  );
}
