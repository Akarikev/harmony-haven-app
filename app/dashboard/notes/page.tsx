"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/Firestore_d";
import { NotesForm } from "@/components/dashboardcomps/NotesForm";

function Notes() {
  const [user] = useAuthState(auth);
  return (
    <div className="font-[inter] px-4">
      <h3 className="scroll-m-20 pb-4 text-regular font-bold tracking-tight lg:text-4xl pt-4 text-gray-700 mb-3 mt-4 lg:text-start">
        Welcome to Notes, {user?.displayName}📒
      </h3>
      <h4 className="scroll-m-20 text-sm mb-6 text-muted-foreground tracking-tight lg:text-xl border shadow-md mx-auto rounded-xl w-fit px-2 py-2 bg-green-400/100  text-center md:px-4 md:py-4 font-regular md:rounded-xl pb-6">
        Here you can write down your journey as you grow every day!🤗 At your
        own pace!🙌
      </h4>

      <NotesForm />
    </div>
  );
}

export default Notes;
