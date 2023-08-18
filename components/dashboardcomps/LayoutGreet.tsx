"use client";

import React from "react";
import GreetText from "./GreetText";
import { useLayoutEffect } from "react";

function LayoutGreet() {
  useLayoutEffect(() => {
    setTimeout(() => {
      <GreetText text="hello" />;
    }, 5000);
  }, []);
  return <div></div>;
}

export default LayoutGreet;
