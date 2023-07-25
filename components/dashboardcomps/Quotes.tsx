"use client";

import { useRandomQuotes } from "@/hooks/useQuotes";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import { quoteType } from "@/lib/types/type";

function Quotes() {
  const randomQuotes = useRandomQuotes(8);

  return (
    <div className="w-full">
      <Wrapper suppressHydrationWarning>
        <h3 className="text-2xl font-bold mx-auto text-[#0a0a81] pl-3">
          Popular{" "}
          <span className="underline font-extrabold underline-offset-2 text-3xl ">
            Quotes
          </span>
          , to get you going 🎉
        </h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: true,
            drag: "free",
            gap: "5rem",
            autoplay: true,
          }}
        >
          {randomQuotes.map((quoteItem: quoteType) => {
            return (
              <SplideSlide key={quoteItem.author}>
                <Card className="font-[inter] shadow-md hidden md:block md:mx-auto  ">
                  <blockquote className="text-zinc-200 leading-4 px-2 [&:not(:first-child)]:mt-6">
                    {quoteItem.text}
                  </blockquote>

                  <h5 className="text-zinc-600  flex justify-center items-center mt-16">
                    {" "}
                    -{quoteItem.author}
                  </h5>

                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
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
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(16, 1, 83, 0.774));
`;

export default Quotes;
