"use client";

import { useRandomQuotes } from "@/hooks/useQuotes";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import { quoteType } from "@/lib/types/type";

function Quotes() {
  const randomQuotes = useRandomQuotes(8);

  return (
    <div className="w-full mt-4">
      <Wrapper suppressHydrationWarning>
        <h3 className="pl-3 mx-auto font-bold text-center text-md text-zinc-600 md:text-3xl md:text-start">
          Motivational Cards 💪
        </h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
            autoplay: true,
            rewind: true,
            type   : 'loop',
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
          {randomQuotes.map((quoteItem: quoteType) => {
            return (
              <SplideSlide key={quoteItem.author}>
                <Card
                  className="font-[inter] shadow-md  lg:mx-auto lg:block 
 "
                >
                  <blockquote className="text-zinc-700 leading-4 px-2 [&:not(:first-child)]:mt-6">
                    {quoteItem.text}
                  </blockquote>

                  <h5 className="flex items-center justify-center mt-16 text-zinc-600">
                    {" "}
                    -{quoteItem.author}
                  </h5>

                  <Gradient className="absolute top-0 left-0  bg-gradient-to-br from-white/90 to-[#0a0a81] rounded-md filter blur-3xl opacity-50 -z-50" />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>

      {/* Mobile view */}

      {/* <Splide
        options={{
          perPage: 2,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
          direction: "ttb",
          wheel: true,

          focus: "center",
        }}
      >
        {randomQuotes.map((quoteItem: quoteType) => {
          return (
            <SplideSlide key={quoteItem.author}>
              <Card className="font-[inter] shadow-md  md:hidden  h-10 ">
                <blockquote className="text-zinc-200 leading-4 px-2 [&:not(:first-child)]:mt-6">
                  {quoteItem.text}
                </blockquote>

                <h5 className="flex items-center justify-center mt-16 text-zinc-600">
                  {" "}
                  -{quoteItem.author}
                </h5>

                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide> */}
    </div>
  );
}

const Wrapper = styled.div`
  /* margin: 0% 12%; */
`;

const Card = styled.div`
  min-height: 20rem;

  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  blockquote {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);

    width: 100%;
    text-align: center;

    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default Quotes;
