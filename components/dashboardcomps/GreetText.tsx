"use client";

import { FC } from "react";
import { Videos } from "@/data/videos";
interface GreetTextProps {
  text: string;
}

const GreetText: FC<GreetTextProps> = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-center items-center  mt-4">
      {Videos.map((item) => {
        return (
          <div key={item.id} className="">
            <iframe
              src={item.embed}
              allowFullScreen
              width={350}
              height={200}
              className="rounded-md shadow-lg"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default GreetText;
