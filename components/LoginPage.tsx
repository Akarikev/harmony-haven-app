"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, provider } from "@/config/Firestore_d";

import {
  signInWithPopup,
  signInAnonymously,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Mail } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";
import PhoneLogin from "./PhoneLogin";

function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      if (res.user) {
        toast({
          title: "Great!",
          description: "Successfully logged in!🎉",
          action: <ToastAction altText="Try again">Please wait</ToastAction>,
        });
        console.log(res.user.uid);
        router.push("/dashboard");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "Error Signing you in, Please Check your connection or make sure you sign in correctly",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* <Image
        src="/images/image_login.jpg"
        layout="fill"
        objectFit="cover"
        alt="login image"
        className="object-contain blur-sm"
      /> */}

      {/* <h2 className="-mt-32 text-xl text-white font-[inter] absolute text-center flex justify-center min-h-screen  items-center md:text-center md:align-middle lg:text-center lg:align-middle mx-auto">
        Unlock your inner happiness 🎉A step at a time. Login now with your
        gmail account and get started
      </h2> */}

      <div className="flex flex-col items-center justify-center ">
        {/* <h1 className="mb-8 text-4xl font-extrabold leading-3 text-center uppercase scroll-m-20 lg:text-5xl ">
        {" "}
        Login with Google to continue to{" "}
        <span className="underline text-cyan-500">Harmony Haven</span>
      </h1> */}

        <h1 className="login_text text-3xl text-center text-[#0f172a]">
          Login to continue to harmony haven
        </h1>

        <Button onClick={signInWithGoogle}>
          <Mail className="mr-2 h-4 w-4 font-[inter]" />
          Login with Google
        </Button>
      </div>

      {/* <PhoneLogin /> */}
    </div>
  );
}

export default LoginPage;
