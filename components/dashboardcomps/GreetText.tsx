import { FC } from "react";
import { Videos } from "@/data/videos";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
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
          gap: "1rem",
          autoplay: true,
          rewind: true,
          type: "loop",
          breakpoints: {
            640: {
              perPage: 1,
              width: 600,
            },
          },
        }}
        className="px-2 mt-2 lg:px-0"
      >
        {Videos.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <Card>
                <iframe
                  src={item.embed}
                  allowFullScreen
                  className=" rounded-md first-letter:ml-6 h-[200px]"
                ></iframe>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

const Card = styled.div`
  min-height: 20rem;

  margin-left: 0.5rem;
  overflow: hidden;
`;

export default GreetText;
