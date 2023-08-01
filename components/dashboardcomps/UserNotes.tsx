import { db } from "@/config/Firestore_d";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
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
import { Input } from "../ui/input";

interface UserNotesProps {}
type Notes = {
  id: string;
  title: string;
  text: string;
  created_at: string;
};

const UserNotes: FC<UserNotesProps> = ({}) => {
  const [data, setData] = useState<Notes[]>([]);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedText, setUpdatedText] = useState("");
  const [noteIdToEdit, setNoteIdToEdit] = useState<string | null>(null);
  const [updatedNoteData, setUpdatedNoteData] = useState<{
    [id: string]: Partial<Notes>;
  }>({});

  // Handle changes to the updated title and text fields
  const handleTitleChange = (noteId: string, value: string) => {
    setUpdatedNoteData((prevData) => ({
      ...prevData,
      [noteId]: { ...prevData[noteId], title: value },
    }));
  };

  const handleTextChange = (noteId: string, value: string) => {
    setUpdatedNoteData((prevData) => ({
      ...prevData,
      [noteId]: { ...prevData[noteId], text: value },
    }));
  };

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

  const editNote = async (noteId: string, updatedData: Partial<Notes>) => {
    try {
      await updateDoc(doc(db, "notes", noteId), updatedData);

      // Fetch the updated data from Firebase again
      fetchData();
      // Clear the noteIdToEdit and updatedNoteData after editing
      setNoteIdToEdit(null);
      setUpdatedNoteData({});
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const deleteNoteButton = async (noteId: string) => {
    try {
      await deleteDoc(doc(db, "notes", noteId));
      // Fetch the updated data from Firebase again
      const querySnapshot = await getDocs(collection(db, "notes"));
      const newData: Notes[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(newData);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div>
      {/* map through the data in the docs, then get the id, use that id to delete the data */}
      {data.map((noteItem) => {
        const isEditing = noteIdToEdit === noteItem.id;
        return (
          <div
            key={noteItem.id}
            className="flex flex-col border shadow-md  px-4 py-4 rounded-lg mb-4 lg:ml-32 lg:mr-32"
          >
            <div className="flex flex-col">
              {/* Display the current values */}
              {isEditing ? (
                <>
                  {/* Show input fields when editing */}
                  <Input
                    type="text"
                    value={
                      updatedNoteData[noteItem.id]?.title || noteItem.title
                    }
                    onChange={(e) =>
                      handleTitleChange(noteItem.id, e.target.value)
                    }
                    placeholder="Enter updated title"
                  />
                  <Input
                    type="text"
                    value={updatedNoteData[noteItem.id]?.text || noteItem.text}
                    onChange={(e) =>
                      handleTextChange(noteItem.id, e.target.value)
                    }
                    placeholder="Enter updated text"
                  />
                </>
              ) : (
                <>
                  {noteItem.title}
                  {noteItem.text}
                  {noteItem.created_at}
                </>
              )}

              <AlertDialog>
                <AlertDialogTrigger>
                  <Button
                    variant={"destructive"}
                    className="w-full md:w-fit lg:w-fit lg:align-right mb-2"
                  >
                    Delete Note
                  </Button>
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

              {/* Edit Note Button */}
              {isEditing ? (
                // Save changes button during editing
                <Button
                  className="w-full md:w-fit lg:w-fit"
                  onClick={() => {
                    const updatedData = updatedNoteData[noteItem.id];
                    if (
                      updatedData &&
                      (updatedData.title || updatedData.text)
                    ) {
                      editNote(noteItem.id, updatedData);
                    } else {
                      // Do something or show a message to indicate that no changes were made.

                      toast({
                        title: "No changes made",
                      });
                    }
                  }}
                >
                  Save Changes
                </Button>
              ) : (
                <Button
                  onClick={() => setNoteIdToEdit(noteItem.id)}
                  className="w-full md:w-fit lg:w-fit"
                >
                  Edit Note
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserNotes;
