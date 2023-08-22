"use client";

import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/Firestore_d";
import Image from "next/image";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Quotes from "./Quotes";

import Link from "next/link";

// interface HeaderProps {}

const Header = () => {
  const [user] = useAuthState(auth);
  const userImage = user?.photoURL;

  // eslint-disable-next-line react/jsx-key

  const router = useRouter();

  const authUser = getAuth();
  const signOutUser = () => {
    signOut(authUser)
      .then(() => {
        // Sign-out successful.
        router.push("/login");
        toast({
          title: "Signed Out!",
          description: `Successfully signedOut🎉`,
          action: <ToastAction altText="">Done</ToastAction>,
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  console.log(user);
  return (
    <div className="w-full  flex flex-col justify-center px-4 pt-4 md:flex-row items-center md:justify-between gap-y-2 font-[inter] ">
      <h2 className="font-sans text-xl  md:text-3xl text-center md:text-start text-[#454e63] md:uppercase  font-medium bg-gradient-to-b from-zinc-200 pb-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit md:static md:w-auto  md:rounded-xl  md:border lg:bg-gray-200 md:p-4 md:dark:bg-zinc-800/30 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300">
        Hello, 👋
        {!user ? "" : user.displayName} How is it going today?
      </h2>

      {/* <SearchComponent content={componentsToRender} /> */}

      {!user ? (
        <Link href="/login" className="text-gray-700">
          youre not logged, click here to continue
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden mt-16">
            <Button className="align-top">
              <Image
                src={`${userImage}`}
                alt="user image"
                width={30}
                height={30}
                className="object-contain rounded-full h-10 w-10 align-top  md:mt-0 md:ml-2"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-medium">
              <Link href="/dashboard/">
                {/* <HomeIcon width={20} height={20} /> */}
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-x-1 font-medium">
              <Link href="dashboard/community/" className="font-medium">
                {/* <CgCommunity width={40} height={40} /> */}
                Community
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-x-1 font-medium">
              <Link href="dashboard/notes/" className="font-medium">
                {/* <CgCommunity width={40} height={40} /> */}
                Notes
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="text-red-600 font-medium"
              onClick={signOutUser}
            >
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      <Image
        src={`${userImage}`}
        alt="user image"
        width={30}
        height={30}
        className="object-contain hidden rounded-full h-10 w-10 align-top mt-10 md:mt-0 md:ml-2 md:block"
      />
    </div>
  );
};

export default Header;
