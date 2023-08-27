"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { facebookLogin } from "./facebook";
import {
  signInWithPopup,
  signInAnonymously,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";
import { auth, provider } from "@/config/Firestore_d";
import { blob } from "node:stream/consumers";
import { useEffect } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const router = useRouter();
  const { toast } = useToast();

  //google sign in
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      if (res.user) {
        toast({
          title: "Great!",
          description: "Successfully logged in!🎉",
          action: <ToastAction altText="Try again">Please wait</ToastAction>,
        });

        router.push("/dashboard");
      } else {
        router.push("/login");
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

  //facebook sign in
  const fbprovider = new FacebookAuthProvider();
  const signInOnFacebook = async () => {
    signInWithPopup(auth, fbprovider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
        fetch(
          `https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`
        );

        if (user) {
          toast({
            title: "Great!",
            description: "Successfully logged in!🎉",
            action: <ToastAction altText="Try again">Please wait</ToastAction>,
          });

          router.push("/dashboard");
        }

        if (!user) {
          toast({
            variant: "destructive",
            title: "Sorry you must log in first",
            description: "Not logged in 😓",
            action: <ToastAction altText="Try again">Try Again</ToastAction>,
          });

          router.push("/login");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.log(
          "Error Message :",
          errorMessage,
          "Error Code :",
          errorCode,
          "Error : ",
          email,
          "Credentials :",
          credential
        );

        // ...
      });
  };

  // useEffect(() => {
  //   if (user) {
  //     toast({
  //       title: "Great!",
  //       description: "Successfully logged in!🎉",
  //       action: <ToastAction altText="Try again">Please wait</ToastAction>,
  //     });

  //     router.push("/dashboard");
  //   }
  // }, []);

  return (
    <div className={cn("grid gap-6 font-sans", className)} {...props}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={signInWithGoogle}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>

      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={signInOnFacebook}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Facebook
      </Button>
    </div>
  );
}
