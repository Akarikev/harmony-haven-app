"use client"

import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect, useState, FormEvent } from "react";
import { db } from "@/store/Firestore_d";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useAuth } from "@clerk/nextjs";

type Note = {
  id: string;
  title: string;
  text: string;
  created_at: string;
};



export default function Community() {
  const [data, setData] = useState<Note[]>([]);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");



  const { getToken } = useAuth();




  const submitToFireStore = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth = getAuth()
    const token = await getToken({ template: "integration_firebase" });
    await signInWithCustomToken(auth, token);

    const created_at = new Date().toISOString();

    

    try {
      const docRef = await addDoc(collection(db, "community"), {
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
      const querySnapshot = await getDocs(collection(db, "community"));
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
        <h2>Welcome to Communities!👨‍👩‍👧‍👧 Here you post to the community about your day and how youre feeling! </h2>
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


