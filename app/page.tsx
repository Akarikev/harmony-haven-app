import Image from "next/image";
import { Abril_Fatface } from "next/font/google";
import Header from "@/components/Header";

// const abrilFatFace = Abril_Fatface({
//   subsets: ["latin"],
//   weight: "400",
// });
export default function Home() {
  return (
    <div className="bg-gray-300/25 min-h-screen ">
      {/* Header */}

      <Header />
    </div>
  );
}
