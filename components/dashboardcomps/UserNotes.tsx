import { db } from "@/config/Firestore_d";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ToastAction } from "@radix-ui/react-toast";
import { title } from "process";
import { toast } from "../ui/use-toast";

interface UserNotesProps {}
type Notes = {
  id: string;
  title: string;
  text: string;
  created_at: string;
};

const UserNotes: FC<UserNotesProps> = ({}) => {
  const [data, setData] = useState<Notes[]>([]);
  useEffect(() => {
    // Fetch data from Firebase on component mount
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "notes"));
      const newData: Notes[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    };

    fetchData();
  }, []);

  const deleteNoteButton = async (noteId: string) => {
    try {
      await deleteDoc(doc(db, "notes", noteId));
      // Fetch the updated data from Firebase again
      const querySnapshot = await getDocs(collection(db, "notes"));
      const newData: Notes[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      //   if (await deleteDoc()) {
      //     toast({
      //       title: "Note Added!",
      //       description: `Successfully Added ${title}!🎉`,
      //       action: <ToastAction altText="Try again">Done</ToastAction>,
      //     });
      //   }
      setData(newData);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div>
      {/* map through the data in the docs, then get the id, use that id to delete the data */}
      {data.map((noteItem) => {
        return (
          <div key={noteItem.id}>
            <div>
              {noteItem.title}
              {noteItem.text}
              {noteItem.created_at}
              {/* <Button
                variant={"destructive"}
                onClick={() => deleteNoteButton(noteItem.id)}
              >
                Delete Note
              </Button> */}

              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant={"destructive"}>Delete Note</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your note titled {""}
                      <span className="font-medium text-xl">
                        `{noteItem.title}`
                      </span>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => deleteNoteButton(noteItem.id)}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserNotes;
