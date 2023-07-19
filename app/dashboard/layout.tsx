import ThemeProvider from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import Modetoggle from "./components/ModeToggle"; // Import the ModeToggle component

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <div className="h-screen ">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Move the ModeToggle component inside the Sidebar */}
          <Sidebar>
            {/* <Modetoggle /> */}
            {children}
          </Sidebar>
        </ThemeProvider>
      </div>
    </html>
  );
}
