import React from "react";
import { Inter } from "next/font/google";
import { FacebookIcon, TwitterIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Footer = () => {
  return (
    <footer
      className={`${inter.variable} font-sans py-10 bg-gray-800 text-white filter `}
    >
      <div className=" container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Hamony Haven</h2>
        <p className="text-lg mb-8">
          We&apos;d love to hear from you. Reach out to us anytime!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FacebookIcon className="mr-2 h-4 w-4" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <TwitterIcon className="mr-2 h-4 w-4" />
          </a>
          {/* <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-instagram text-2xl">About</i>
          </a> */}
        </div>
        <p className="mt-8">
          &copy; 2023 Harmony Haven. A final year Project. All rights reserved.
          Made in Ghana.
        </p>
        <Link href={"/privacy-policy"} className="mt-4 text-white">
          <Button variant={"link"} className="text-white">
            Privacy Policy & Terms
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
