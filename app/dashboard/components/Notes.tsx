"use client"

import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect, useState, FormEvent } from "react";
import { db } from "@/store/Firestore_d";

type Note = {
  id: string;
  title: string;
  text: string;
  created_at: string;
};

export default function Notes() {
  const [data, setData] = useState<Note[]>([]);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  

  const submitToFireStore = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const created_at = new Date().toISOString();

    

    try {
      const docRef = await addDoc(collection(db, "notes"), {
        title,
        text,
        created_at,
      });

      console.log("Document written with ID: ", docRef.id);


      // Update the data state with the new document
      setData((prevData) => [
        ...prevData,
        { id: docRef.id, title, text, created_at },
      ]);

      // Clear the form fields after successful submission
      setTitle("");
      setText("");
   
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    // Fetch data from Firebase on component mount
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "notes"));
      const newData: Note[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={submitToFireStore}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="text"
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

         
          <button type="submit">submit</button>
        </form>

        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <p>{item.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
