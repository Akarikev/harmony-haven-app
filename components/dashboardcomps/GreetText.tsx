import { FC } from "react";
import { Videos } from "@/data/videos";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
interface GreetTextProps {}

const GreetText: FC<GreetTextProps> = () => {
  return (
    <div>
      <h1 className="mt-4 px-9 text-xl font-bold md:text-2xl">Top Videos</h1>

      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
          autoplay: true,
          rewind: true,
          type: "loop",
          breakpoints: {
            640: {
              perPage: 1,
              width: 600,
              gap: "2rem",
            },
          },
        }}
        className="px-2 mt-2 lg:px-0"
      >
        {Videos.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <div className=" px-9">
                <iframe
                  src={item.embed}
                  allowFullScreen
                  className="rounded-md shadow-lg md:w-[350px] w-[200px] h-[200px]"
                ></iframe>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default GreetText;
