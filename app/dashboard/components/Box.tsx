import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }:BoxProps) {
  return (
    <div
      className={twMerge(
        `
          bg-white rounded-lg h-fit w-full text-black
          `,
        className
      )}
    >
      {children}
    </div>
  );
};

