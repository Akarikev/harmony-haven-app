import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { emojiMood } from "@/data/emojis";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { FormEvent, useState } from "react";
import { auth, db } from "@/config/Firestore_d";
import { toast } from "../ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import * as z from "zod";

import { useForm } from "react-hook-form";
import UserNotes from "./UserNotes";
import { useAuthState } from "react-firebase-hooks/auth";

type Notes = {
  id: string;
  title: string;
  text: string;
  created_at: string;
  // creatorId: string;
};

interface NoteInteface {}

// const formSchema = z.object({
//   title: z.string().min(2, {
//     message: "This is required.",
//   }),
//   text: z.string().min(4, {
//     message: "This is required",
//   }),
// });

export function NotesForm() {
  const [data, setData] = useState<Notes[]>([]);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [mood, setMood] = useState<string>("");

  const [user] = useAuthState(auth);

  const USERUID = user?.uid;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: "",
      title: "",
    },
  }); //enforcing validations

  const sendToDB = async () => {
    //date note was created by the user
    const created_at = new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    try {
      const docRef = await addDoc(collection(db, "notes"), {
        title,
        text,
        created_at,
        mood,
        creatorId: USERUID,
      });

      console.log("Document written with ID: ", docRef.id);

      if (docRef) {
        toast({
          title: "Note Added!",
          description: `Successfully Added ${title}!🎉`,
          action: <ToastAction altText="Try again">Done</ToastAction>,
        });
      }

      // Update the data state with the new document
      setData((prevData) => [
        ...prevData,
        { id: docRef.id, title, text, created_at },
      ]);

      // Clear the form fields after successful submission
      setTitle("");
      setText("");
      setMood("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Error Adding your note in, Please Check your connection ", //catches error and display it to the user
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.error("Error adding document: ", error); //catch error and log it into the console
    }
  };
  return (
    <div className="md:px-32 lg:px-36">
      <div
        className="mt-10 border shadow-lg p-4 rounded-lg "
        suppressHydrationWarning
      >
        <h1 className="text-center text-2xl uppercase font-bold text-muted-foreground">
          New Entry
        </h1>

        <p className="text-center text-gray-500 text-sm">
          Add a new entry to your diary / journel
        </p>
        <form
          onSubmit={handleSubmit(sendToDB)}
          className="grid w-full gap-2 mt-4"
        >
          <Input
            type="text"
            placeholder="Entry title"
            value={title}
            {...register("title", {
              required:
                "Hey, this is a required field, maybe you forgot to add it",
              minLength: {
                value: 4,
                message: "Title should be at least 4 characters long.",
              },
            })}
            onChange={(e) => setTitle(e.target.value)}
            className={errors.title ? "border-red-500" : ""}
          />
          <p className="text-red-300 text-muted-foreground">
            {errors.title?.message}
          </p>

          <Textarea
            placeholder="What happened on this day?."
            value={text}
            {...register("text", {
              required:
                "Hey!, This is also required, did you forget to add it?",
              minLength: {
                value: 4,
                message: "Note should be at least 4 characters long.",
              },
            })}
            onChange={(e) => setText(e.target.value)}
            className={errors.text ? "border-red-500" : ""}
          />
          <p className="text-red-300 text-muted-foreground">
            {errors.text?.message}
          </p>

          <p className="text-muted-foreground text-center">
            How does this makes you feel ?
          </p>
          <div className="flex justify-center gap-10 flex-wrap mt-2">
            {emojiMood.map((item: any) => (
              <ul
                key={item.emojiName}
                className={`flex justify-center items-center ${
                  mood === item.emoji ? "border-green-500" : ""
                }`}
                onClick={() => setMood(item.emoji)} // Set the mood state on click
              >
                <li
                  className={`flex justify-center items-center w-16 h-16 text-center border shadow-md rounded-full hover:bg-muted-foreground hover:text-white cursor-pointer transition-all ease-in-out delay-75 ${
                    mood === item.emoji ? "bg-muted-foreground text-white" : ""
                  }`}
                >
                  {item.emoji}
                </li>
              </ul>
            ))}
          </div>

          <Button type="submit" className="mt-4 mb-4">
            Add Notes
          </Button>
        </form>
      </div>

      <UserNotes />
    </div>
  );
}
