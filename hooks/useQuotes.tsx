// import quotes from '../data/quotes'
// import { useMemo } from 'react';

// export const useQuote = () => {
//   const max = quotes.length - 1
//   const r = Math.floor(Math.random() * max)
//   const item = quotes[r]
//   const quote = item.text
//   const author = item.author

//   return {
//     quote,
//     author,
//   }
// }
"use client";

import quotes from "../data/quotes";
import { useMemo } from "react";

export const useRandomQuotes = (numQuotes = 3) => {
  const max = quotes.length;
  const randomQuotes = useMemo(() => {
    const shuffledQuotes = quotes.sort(() => 0.5 - Math.random());
    return shuffledQuotes.slice(0, numQuotes);
  }, [numQuotes]);

  return randomQuotes;
};
