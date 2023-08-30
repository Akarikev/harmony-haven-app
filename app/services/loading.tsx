"use client";

import React from "react";

function loading() {
  return (
    <div className="flex flex-col justify-center  items-center align-middle min-h-screen ">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
      ></div>
      <p className="">Loading</p>
    </div>
  );
}

export default loading;
