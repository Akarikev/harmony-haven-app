import Sidebar from "@/components/dashboardcomps/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`${inter.variable} font-sans`}>
      <Sidebar>{children}</Sidebar>
    </section>
  );
}
