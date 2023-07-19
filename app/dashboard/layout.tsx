

import ThemeProvider  from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    
   
     
<section  className= {inter.className}>
<div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       
        <Sidebar>{children}</Sidebar>   

       

        </ThemeProvider>
        </div>

</section>
  
    
      
   
  );
}

