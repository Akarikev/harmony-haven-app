"use client";

import Image from "next/image";

import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Abril_Fatface } from "next/font/google";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fatface",
});

export const abrilFatFace = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const introTextStyle = `${abrilFatFace.className} text-5xl px-3 flex flex-col justify-center items-center text-center xl:text-7xl xl:text-left xl:pl-3 md:text-center md:text-7xl `;

function Header() {
  return (
    <header className="-mt-4 ">
      <div className="flex items-center justify-between w-full h-24 p-4 mt-2">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-white/90 to-[#0a0a81] rounded-md filter blur-3xl opacity-50 -z-50 " />

        {/* Main header */}

        <h2 className={`${fatface.variable} font-face text-blue-400 text-2xl`}>
          Harmony Haven
        </h2>

        <div className="hidden space-x-3   md:block font-[inter] lg:block xl:block">
          <Button variant={"link"}>
            <Link href="#" className="text-[#0a0a81]">
              About
            </Link>
          </Button>
          <Button variant={"link"}>
            <Link href="#" className="text-[#0a0a81]">
              Get Help
            </Link>
          </Button>
          <Button variant={"link"}>
            <Link href="#" className="text-[#0a0a81]">
              Services
            </Link>
          </Button>
        </div>

        <div className="justify-end hidden px-3 space-x-2 md:flex">
          <Link
            className={buttonVariants({ variant: "default" })}
            href="/login"
          >
            Login
          </Link>

          <Link
            className={buttonVariants({ variant: "default" })}
            href="/login"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Navigations  */}
        <div className=" md:hidden font-[inter] lg:hidden xl:hidden">
          <Popover>
            <PopoverTrigger>
              <BiMenuAltRight className="text-[#0a0a81] w-10 h-10 hover:text-white" />
            </PopoverTrigger>
            <PopoverContent>
              <div className="z-10 flex flex-col w-full space-y-4 ">
                <Button variant={"link"}>
                  <Link href="#" className="text-[#0a0a81] ">
                    About
                  </Link>
                </Button>
                <Button variant={"link"}>
                  <Link href="#" className="text-[#0a0a81] ">
                    Get Help
                  </Link>
                </Button>
                <Button variant={"link"}>
                  <Link href="#" className="text-[#0a0a81] ">
                    Services
                  </Link>
                </Button>

                <Link
                  className={buttonVariants({ variant: "default" })}
                  href="/login"
                >
                  Login
                </Link>

                <Link
                  className={buttonVariants({ variant: "default" })}
                  href="/login"
                >
                  Join Now
                </Link>

                <p className="flex text-center font-[inter] items-center text-sm  pr-5 shadow-xl rounded-xl w-fit bg-white/25 italic max-w-3xl p-5 text-gray-600 font-medium">
                  {
                    "By Clicking Login or Join Now means you've accepted our Privacy"
                  }
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className=" bg-white/30 font-[inter] text-gray-500 w-fit flex justify-center items-center rounded-full text-center mx-auto md:mx-auto shadow-md"
      >
        <p className="px-2 py-3 font-medium text-gray-600 text-small ">
          {"Making it through life's toughest moments together🎉"}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex flex-col items-center justify-center pl-5 mt-2 xl:flex-row xl:text-left md:flex-col"
      >
        <div className="section_header" suppressHydrationWarning>
          {/* any other codes goes here */}
          <h1 className={`${fatface.variable} font-face text-[#946e21]`}>
            <span className="text-blue-700  ">Your Mental Health is Your</span>
            <br />
            <span className="text-center underline decoration-wavy">
              Wealth
            </span>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex flex-col font-[inter] mx-auto text-lg mt-12"
            >
              <p className={`${inter.variable} font-sans`}>
                {
                  "To live your life to it's fullest we're continuing to find ways  to prevent mental health problems"
                }
                <br />
                <Link href="/login" className="underline hover:decoration-wavy">
                  {" "}
                  {""} Get Started Now🎉
                </Link>
              </p>
            </motion.div>
          </h1>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-center justify-center w-full"
        >
          <Image
            src="/images/autumn-goodman-medium-removebg.png"
            width={870}
            height={870}
            alt="harmony logo"
            priority
            className="object-contain w-full h-full"
          />
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Header;
