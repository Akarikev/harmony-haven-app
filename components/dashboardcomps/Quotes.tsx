"use client";

import { useRandomQuotes } from "@/hooks/useQuotes";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import typeQuote
function Quotes() {
  const quotes = useRandomQuotes();
  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 2,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        <SplideSlide>
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg shadow-lg">
            <div className="flex flex-col w-full pb-2">
              <blockquote className="mt-4 border-l-2 pl-4 italic text-zinc-500">
                {quotes.quote}
              </blockquote>
              <p className="text-gray-600 text-right text-medium">
                {quotes.author}
              </p>
            </div>
            {/* <p className='bg-green-200 flex justify-center items-center  rounded-lg'>
                <span className='text-green-700 text-sm'>+60 upvotes</span>
            </p> */}
          </div>
        </SplideSlide>
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Quotes;
function useQuote() {
  throw new Error("Function not implemented.");
}
