"use client";


import { NotesForm } from "@/components/dashboardcomps/NotesForm";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import UserNotes from "@/components/dashboardcomps/UserNotes";
import { HomeIcon, MenuIcon, UserIcon } from "lucide-react";
import { getAuth, signOut } from "firebase/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

import Link from "next/link";


function Notes() {
  // const [user] = useAuthState(auth);
  const router = useRouter();
  const [addEntry, setAddEntry] = useState<boolean>(true);

  const auth = getAuth();
  const signOutUser = () => {
    signOut(auth)
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
  const onClickable = () => {
    setAddEntry((prevEntry) => !prevEntry);
  };
  return (
    <div className="font-sans px-4 mt-4">
      <div className="flex justify-between flex-1 align-top items-center">
        <h3 className=" font-extrabold  lg:text-4xl  text-gray-700 mb-3 lg:text-start">
          📒 Notes and Journel
        </h3>

        <Button onClick={onClickable} className="align-top">
          {addEntry ? " X Close Entry" : "New Entry"}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden">
            <Button className="align-top">
              <MenuIcon />
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
      </div>

      <h4 className="scroll-m-20 text-sm mb-6 text-muted-foreground tracking-tight lg:text-xl border shadow-md mx-auto rounded-xl w-fit px-2 py-2 bg-white  text-center md:px-4 md:py-4 font-regular md:rounded-xl pb-6">
        Here you can write down your journey as you grow every day!🤗 At your
        own pace!🙌
      </h4>
      {addEntry && <NotesForm />}
    </div>
  );
}

export default Notes;
