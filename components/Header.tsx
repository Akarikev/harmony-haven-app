"use client";

import Image from "next/image";

import { Button } from "./ui/button";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Abril_Fatface } from "next/font/google";
import { BiMenuAltRight } from "react-icons/bi";

const abrilFatFace = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const introTextStyle = `${abrilFatFace.className} text-5xl px-3 flex flex-col justify-center items-center text-center xl:text-7xl xl:text-left xl:pl-3 md:text-center md:text-7xl`;

function Header() {
  return (
    <header className=" -mt-4 ">
      <div className="flex items-center justify-between   p-4 mt-2 w-full h-24">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-white/90 to-[#0a0a81] rounded-md filter blur-3xl opacity-50 -z-50 " />
        <Image
          src="/images/harmony_logo.png"
          width={140}
          height={10}
          alt="harmony logo"
          priority
          className="object-contain "
        />

        <div className="hidden space-x-3   md:block font-[inter] lg:block xl:block">
          <Button variant={"link"}>
            <Link href="#" className="text-blue-500">
              About
            </Link>
          </Button>
          <Button variant={"link"}>
            <Link href="#" className="text-blue-500">
              Get Help
            </Link>
          </Button>
          <Button variant={"link"}>
            <Link href="#" className="text-blue-500">
              Services
            </Link>
          </Button>
        </div>

        <div className="hidden  md:flex justify-end px-3 space-x-2">
          <Button asChild variant="default" size="lg">
            <Link className="font-[inter]" href="/sign-in">
              Login
            </Link>
          </Button>

          <Button asChild variant="secondary" size="lg">
            <Link className="font-[inter]" href="/sign-up">
              Join Now
            </Link>
          </Button>
        </div>

        {/* Mobile Navigations  */}
        <div className=" md:hidden font-[inter] lg:hidden xl:hidden">
          <Popover>
            <PopoverTrigger>
              <BiMenuAltRight className="text-blue-500 w-10 h-10 hover:text-white" />
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col space-y-4 w-full z-10">
                <Button variant={"link"}>
                  <Link href="#">About</Link>
                </Button>
                <Button variant={"link"}>
                  <Link href="#">Get Help</Link>
                </Button>
                <Button variant={"link"}>
                  <Link href="#">Services</Link>
                </Button>

                <Button asChild variant="default" size="lg">
                  <Link className="font-[inter]" href="/sign-in">
                    Login
                  </Link>
                </Button>

                <Button asChild variant="secondary" size="lg">
                  <Link className="font-[inter]" href="/sign-up">
                    Join Now
                  </Link>
                </Button>

                <p className="flex text-center font-[inter] items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl p-5 text-[#515153]">
                  Clicking Login or Join Now means you've accepted our Privacy
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* {isMenu && (
          <div className="w-[75%] md:hidden font-[inter] lg:hidden xl:hidden shadow-md h-full fixed top-0 left-0  bg-slate-200/100 flex-col p-4 justify-center  items-center transition ease-in duration-500">
            <div className="flex flex-col space-y-3 text-gray-900 font-medium ">
              <Button variant={"link"}>
                <Link href="#">About</Link>
              </Button>
              <Button variant={"link"}>
                <Link href="#" className="">
                  Get Help
                </Link>
              </Button>
              <Button variant={"link"}>
                <Link href="#">Services</Link>
              </Button>
              <Button asChild>
                <Link
                  className={buttonVariants({ size: "lg" })}
                  href="/sign-in"
                >
                  Login
                </Link>
              </Button>

              <Button asChild variant="secondary" size="lg" className="mb-4">
                <Link href="/sign-up">Join Now</Link>
              </Button>
            </div>
            <div className=" flex mt-3 italic text-gray-700 font-light p-1 text-center bg-white rounded-xl shadow-lg justify-end ">
              <p>
                Clicking Login or Join Now means you've accepted our Privacy
                Policies
              </p>
            </div>
          </div>
        )} */}
      </div>

      <div className=" bg-white/30 font-[inter] text-gray-500 w-fit flex justify-center items-center rounded-full text-center mx-auto md:mx-auto">
        <p className="px-2 py-3 text-small font-bold">
          {"Making it through life's toughest moments together🎉"}
        </p>
      </div>

      <div className="flex flex-col items-center mt-2 xl:flex-row xl:text-left md:flex-col">
        <div className={introTextStyle}>
          <h1 className="text-[#946e21] font-medium">
            <span className="text-blue-500 w-full">
              Mental Health in Ghana,
            </span>
            <br />
            <span className="underline decoration-wavy text-center">
              is Wealth
            </span>
          </h1>
        </div>

        <Image
          src="/images/autumn-goodman-medium-removebg.png"
          width={870}
          height={870}
          alt="harmony logo"
          priority
          className="object-contain "
        />
      </div>
    </header>
  );
}

export default Header;
