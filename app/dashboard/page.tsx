import Chart from "@/components/Chart";
import Header from "@/components/dashboardcomps/Header";
import LayoutGreet from "@/components/dashboardcomps/LayoutGreet";
import Meditation from "@/components/dashboardcomps/Meditation";
import NotesToHome from "@/components/dashboardcomps/NotesToHome";

import TopCards from "@/components/dashboardcomps/TopCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmony-Haven | Dashboard",
  description: "Users Dashboard",
};

function page() {
  return (
    <div className={`font-sans`}>
      <Header />
      <main className="bg-white min-h-screen">
        <TopCards />
        <LayoutGreet />

        <Meditation />

        {/* Notes  */}

        <NotesToHome />

        <Chart />
      </main>
    </div>
  );
}

export default page;
