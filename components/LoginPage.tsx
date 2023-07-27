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
    <div suppressHydrationWarning>
      <div className="flex justify-center flex-col items-center min-h-screen">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase text-center mb-8 leading-3 ">
          {" "}
          Login with Google to continue to{" "}
          <span className="underline text-cyan-500">Harmony Haven</span>
        </h1>
        <Button onClick={signInWithGoogle}>
          <Mail className="mr-2 h-4 w-4 font-[inter]" />
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
