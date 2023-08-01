import Notes from "@/app/dashboard/notes/page";
import { db } from "@/config/Firestore_d";
import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    // Fetch data from Firebase on component mount

    fetchData();
  }, []);
  return (
    <div className="md:px-32">
      Your Entries Notes and Journels
      {data.map((entry) => {
        return (
          <div key={entry.id} className="border  shadow-md rounded-lg ">
            <div>
              <h1 className="font-medium text-zinc-700 underline underline-offset-2">
                {entry.title}
              </h1>
              <p className="text-sm text-gray-800">{entry.text}</p>
              <p>{entry.mood}</p>
              <small className="text-gray-600">
                {" "}
                created at: {entry.created_at}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NotesToHome;
