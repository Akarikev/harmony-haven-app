"use client";

import React from "react";
import GreetText from "./GreetText";
import { useLayoutEffect } from "react";

function LayoutGreet() {
  useLayoutEffect(() => {
    // setTimeout(() => {
    //   <GreetText text="hello" />;
    // }, 100000);
  }, []);
  return (
    <div>
      <GreetText />
    </div>
  );
}

export default LayoutGreet;
