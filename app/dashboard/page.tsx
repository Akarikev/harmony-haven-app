import BarChart from "@/components/dashboardcomps/BarChart";
import GreetText from "@/components/dashboardcomps/GreetText";
import Header from "@/components/dashboardcomps/Header";
import LayoutGreet from "@/components/dashboardcomps/LayoutGreet";
import Meditation from "@/components/dashboardcomps/Meditation";
import NotesToHome from "@/components/dashboardcomps/NotesToHome";

import TopCards from "@/components/dashboardcomps/TopCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmony-Haven|Dashboard",
  description: "Users Dashboard",
};

function page() {
  return (
    <div className={`font-sans`}>
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
