"use client";

import { FC } from "react";
import { Videos } from "@/data/videos";
interface GreetTextProps {
  text: string;
}

const GreetText: FC<GreetTextProps> = () => {
  return (
    <div>
      {Videos.map((item) => {
        return (
          <div key={item.id}>
            <iframe src={item.embed}></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default GreetText;
