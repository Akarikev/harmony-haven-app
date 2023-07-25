import BarChart from "@/components/dashboardcomps/BarChart";
import Header from "@/components/dashboardcomps/Header";
import TopCards from "@/components/dashboardcomps/TopCards";

function page() {
  return (
    <div className="font-[inter]  ">
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          {/* <BarChart /> */}
        </div>
      </main>
    </div>
  );
}

export default page;
