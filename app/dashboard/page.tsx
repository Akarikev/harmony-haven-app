import BarChart from "@/components/DashboardComponents/BarChart";
import Header from "@/components/DashboardComponents/Header";
import TopCards from "@/components/DashboardComponents/TopCards";



function page() {
  return (
    <div className="font-[inter]  rounded-lg h-full w-full overflow-hidden overflow-y-auto">
  
  <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
         
        </div>
      </main>
    
  
   

    </div>
  );
}

export default page;
