"use client";

import BarChart from "@/components/dashboardcomps/BarChart";
import Header from "@/components/dashboardcomps/Header";
import Meditation from "@/components/dashboardcomps/Meditation";

import TopCards from "@/components/dashboardcomps/TopCards";

interface AudioElement extends HTMLAudioElement {
  src: string;
}

function page() {
  return (
    <div className="font-[inter]  ">
      <main className="bg-white min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          {/* <BarChart /> */}

          <Meditation />
        </div>
      </main>
    </div>
  );
}

export default page;
