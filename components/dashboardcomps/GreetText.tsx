"use client";

import { FC } from "react";

interface GreetTextProps {
  text: string;
}

const GreetText: FC<GreetTextProps> = ({ text }: GreetTextProps) => {
  return <div>{text}</div>;
};

export default GreetText;
