"use client";

import React from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/Firestore_d";
import Image from "next/image";
import Search from "./SearchComponent";
import SearchComponent from "./SearchComponent";
import Quotes from "./Quotes";

interface HeaderProps {}

const Header = () => {
  const [user] = useAuthState(auth);
  const userImage = user?.photoURL;

  // eslint-disable-next-line react/jsx-key
  const componentsToRender = [<Quotes />];

  console.log(user);
  return (
    <div className="flex flex-col justify-center px-4 pt-4 md:flex-row items-center md:justify-between gap-y-2">
      <h2 className="scroll-m-20 font-bold border-b pb-2 text-lg  tracking-tight transition-colors first:mt-0 md:text-3xl text-center md:text-start text-[#55558b] font-[inter]">
        Hello, 👋{!user ? "" : user.displayName} How is it going today?
      </h2>

      <SearchComponent content={componentsToRender} />

      <Image
        src={userImage}
        alt="user image"
        width={30}
        height={30}
        className="object-contain rounded-full h-10 w-10 align-top"
      />
    </div>
  );
};

export default Header;
