import Image from "next/image";
import { Abril_Fatface } from "next/font/google";
import Header from "@/components/Header";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="bg-gray-300/25 min-h-screen dark:bg-gray-800">
      {/* Header */}

      <Header />

      {/* Features */}

      <Features />
    </div>
  );
}
