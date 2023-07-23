"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { abrilFatFace } from "./Header";
import { useState } from "react";
const introTextStyle = `${abrilFatFace.className} text-4xl text-gray-500 text-center underline decoration-wavy text-[#0a0a81] pt-2 md:text-5xl lg:text-7xl lg:text-start lg:ml-2`;

export default function BasicCard() {
  const [darkMode, setDark] = useState(false);
  return (
    <div className={` ${darkMode && "dark"}`}>
      <Card className={`bg-slate-200 dark:bg-slate-800`}>
        <h1 className={introTextStyle}>features</h1>
        <div className="flex justify-center items-center">
          {/* <button onClick={() => setDark(!darkMode)}>
            {darkMode ? "Light" : "dark"}
          </button> */}
          <CardContent className="bg-gray-500 w-[300px] h-[300px] mt-10 dark:bg-gray-800 rounded-xl shadow-zinc-900 shadow-lg border-black "></CardContent>
        </div>
      </Card>
    </div>
  );
}
