"use client";

import React from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/Firestore_d";
import Image from "next/image";
interface HeaderProps {}

const Header = () => {
  const [user] = useAuthState(auth);
  const userImage = user?.photoURL;

  console.log(user);
  return (
    <div className="flex justify-between px-4 pt-4">
      <h2 className="scroll-m-20 font-bold border-b pb-2 text-lg  tracking-tight transition-colors first:mt-0 md:text-3xl text-center md:text-start text-[#55558b] font-[inter]">
        Hello, 👋{!user ? "" : user.displayName} How is it going today?
      </h2>

      <Image
        src={userImage}
        alt="user image"
        width={30}
        height={30}
        className="object-contain rounded-full h-10 w-10 "
      />
    </div>
  );
};

export default Header;
