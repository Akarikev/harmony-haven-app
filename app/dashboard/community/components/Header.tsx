"use client";

import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/Firestore_d";
import Image from "next/image";

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

import Link from "next/link";
import { MenuIcon } from "lucide-react";

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
    <div className="">
      {/* <SearchComponent content={componentsToRender} /> */}

      {!user ? (
        <Link href="/login" className="text-gray-700">
          youre not logged, click here to continue
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden mt-16">
            {/* <Image
              src={`${userImage}`}
              alt="user image"
              width={30}
              height={30}
              className="object-contain rounded-full h-10 w-10 align-top  md:mt-0 md:ml-2"
            /> */}

            <MenuIcon />
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

      {/* <Image
        src={`${userImage}`}
        alt="user image"
        width={30}
        height={30}
        className="object-contain hidden rounded-full h-10 w-10 align-top mt-10 md:mt-0 md:ml-2 md:block"
      /> */}
    </div>
  );
};

export default Header;
