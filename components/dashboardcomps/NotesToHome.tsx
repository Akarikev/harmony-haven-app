"use client";

import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/config/Firestore_d";
import Link from "next/link";
import { ToastAction } from "../ui/toast";

type Notes = {
  id: string;
  title: string;
  text: string;
  created_at: string;
  mood: string;
  creatorId: string;
};

function NotesToHome() {
  const [data, setData] = useState<Notes[]>([]);
  const [user] = useAuthState(auth);
  const USERUID = user?.uid;

  const fetchData = async () => {
    const getDataRef = collection(db, "notes");
    const querySnapshot = await getDocs(getDataRef);
    setData(
      querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Notes[]
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <div>
        {" "}
        <p>You haven&apos;t created any notes. Click below to add a new one</p>
        <Link href="/dashboard/notes/">Add New Entry</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-sans text-[#0f172a] text-3xl pl-4">Your Notes</h1>
      <div className="grid grid-cols-2 gap-2 px-4 md:px-14 lg:px-20">
        {data ? (
          data
            .filter((item) => item?.creatorId === USERUID)
            .map((entry) => (
              <div
                key={entry.id}
                className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-red-200"
              >
                <div>
                  <h1 className="font-medium underline text-zinc-700 underline-offset-2">
                    Title: {entry.title}
                  </h1>
                  <p className="text-sm text-gray-800">{entry.text}</p>
                  <p>Mood: {entry.mood}</p>
                  <small className="text-gray-600">
                    created at: {entry.created_at}
                  </small>
                </div>
              </div>
            ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <p>No Notes Entry Created. Please add a new one.</p>
            {/* Add a button or link to create a new note */}
            <Button variant={"link"}>
              <Link href="/dashboard/notes/">Add New Entry</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesToHome;
