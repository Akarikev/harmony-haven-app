import Sidebar from "@/components/dashboardcomps/Sidebar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <section className = {inter.className}>

  
     <Sidebar>
     {children}
     </Sidebar>
       
   
         
          
  
     
      </section>
  );
}
