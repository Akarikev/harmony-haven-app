"use client";

import BarChart from "@/components/dashboardcomps/BarChart";
import GreetText from "@/components/dashboardcomps/GreetText";
import Header from "@/components/dashboardcomps/Header";
import LayoutGreet from "@/components/dashboardcomps/LayoutGreet";
import Meditation from "@/components/dashboardcomps/Meditation";
import NotesToHome from "@/components/dashboardcomps/NotesToHome";

import TopCards from "@/components/dashboardcomps/TopCards";

function page() {
  return (
    <div className="font-[inter]">
      <Header />
      <main className="bg-white min-h-screen">
        <TopCards />
        <LayoutGreet />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          {/* <BarChart /> */}

          <Meditation />

          {/* Notes  */}
        </div>
        <NotesToHome />
      </main>
    </div>
  );
}

export default page;
