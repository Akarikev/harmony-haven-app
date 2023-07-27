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

function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      if (res.user) {
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
    <div>
      <Button onClick={signInWithGoogle}>Login with Google</Button>
    </div>
  );
}

export default LoginPage;
