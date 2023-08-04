import Notes from "@/app/dashboard/notes/page";
import { db } from "@/config/Firestore_d";
import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { Button } from "../ui/button";

type Notes = {
  id: string;
  title: string;
  text: string;
  created_at: string;
  mood: string;
};

function NotesToHome() {
  const [data, setData] = useState<Notes[]>([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const newData: Notes[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(newData);
  };

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

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="login_text text-[#0f172a] text-3xl  pl-4">Your Notes</h1>
      <div className="md:px-14 lg:px-20 px-4 grid grid-cols-2 gap-2 ">
        {!data ? (
          <div>
            <p>
              No Notes Entry Created please click the button below to add notes
            </p>
            <Button>Create New Entry</Button>
          </div>
        ) : (
          data.map((entry) => {
            return (
              <div
                key={entry.id}
                className="border cursor-pointer hover:bg-red-200 p-4  shadow-md rounded-lg "
              >
                <div>
                  <h1 className="font-medium text-zinc-700 underline underline-offset-2">
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
