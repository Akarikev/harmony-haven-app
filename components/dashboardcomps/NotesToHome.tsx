"use client";

import Notes from "@/app/dashboard/notes/page";
import { auth, db } from "@/config/Firestore_d";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { Button } from "../ui/button";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import {
  signInWithPopup,
  signInAnonymously,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

type Notes = {
  id: string;
  title: string;
  text: string;
  created_at: string;
  mood: string;
};

function NotesToHome() {
  const [data, setData] = useState<Notes[]>([]);
  const [displayCurrentUserNote, setDisplayCurrentUserNote] = useState(false);
  const [user] = useAuthState(auth);
  // Store the current user

  const fetchData = async () => {
    if (!user) {
      // User is not signed in, do nothing
      return;
    }

    const userUID = user.uid;

    console.log(userUID);

    try {
      const querySnapshot = await getDocs(
        query(collection(db, "notes"), where("uid", "==", userUID))
      );

      setData(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),

          id: doc.id,
        })) as Notes[]
      );
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // const displayUserNote = async () => {
  //   const resShow = await getAuth();
  //   const querySnapshot = await getDocs(collection(db, "notes"));
  //   const dataFromUSer: Notes[] = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //   }));
  // };

  if (!data) {
    toast({
      title: "Sorry something went wrong",
      description: `Data cannot be fetched please check your internet connection`,
      action: <ToastAction altText="Try again">Done</ToastAction>,
    });
  }

  // if() {

  // }

  useEffect(() => {
    // Fetch data from Firebase on component mount
    // Check if the user is signed in and update the state accordingly
    // const authListener = onAuthStateChanged(auth, (user) => {
    //   setUser(user);
    // });
    fetchData();
    // return () => {
    //   // Clean up the auth listener when the component unmounts
    //   authListener();
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1 className="login_text text-[#0f172a] text-3xl  pl-4">Your Notes</h1>

      <div>
        {/* {data.filter((noteItem : Notes[]) => {
          if(user?.uid && doc. ) {

          }
        })} */}
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 md:px-14 lg:px-20 ">
        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full ">
            <p>No Notes Entry Created please add new one </p>
            <Button variant={"link"}>
              <Link href={"/dashboard/notes/"}>Add New Entry</Link>
            </Button>
          </div>
        ) : (
          data.map((entry) => {
            return (
              <div
                key={entry.id}
                className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-red-200 "
              >
                <div>
                  <h1 className="font-medium underline text-zinc-700 underline-offset-2">
                    Title: {entry.title}
                  </h1>
                  <p className="text-sm text-gray-800">{entry.text}</p>
                  <p>Mood: {entry.mood}</p>
                  <small className="text-gray-600">
                    {" "}
                    created at: {entry.created_at}
                  </small>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default NotesToHome;
