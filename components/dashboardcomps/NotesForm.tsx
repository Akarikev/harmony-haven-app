import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { emojiMood } from "@/data/emojis";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { FormEvent, useState } from "react";
import { db } from "@/config/Firestore_d";
import { toast } from "../ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

type Notes = {
  id: string;
  title: string;
  text: string;
  created_at: string;
};

export function NotesForm() {
  const [data, setData] = useState<Notes[]>([]);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const sendToDB = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const created_at = new Date().toISOString();
    try {
      const docRef = await addDoc(collection(db, "notes"), {
        title,
        text,
        created_at,
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
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Error Adding your note in, Please Check your connection ",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div className="mt-6 border shadow-lg p-4 rounded-lg">
      <h1 className="text-center text-2xl uppercase font-bold text-muted-foreground">
        Write Notes :
      </h1>
      <form onSubmit={sendToDB} className="grid w-full gap-2 mt-4">
        <Input
          type="text"
          placeholder="Note/Journel title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Type your message here."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button type="submit">Add Notes</Button>
      </form>

      <p className="text-muted-foreground text-center">
        Choose your mood for this :
      </p>
      <div className="flex justify-center gap-10 flex-wrap  ">
        {emojiMood.map((item: any) => (
          <ul key={item.item} className=" flex justify-center items-center ">
            <li className="flex justify-center items-center  w-16 h-16 text-center border shadow-md rounded-full  hover:bg-muted-foreground hover:text-white cursor-pointer transition-all ease-in-out delay-75">
              {item}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
