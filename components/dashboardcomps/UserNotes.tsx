import { auth, db } from "@/config/Firestore_d";
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
import { useAuthState } from "react-firebase-hooks/auth";

interface UserNotesProps {}
type Notes = {
  id: string;
  title: string;
  text: string;
  created_at: string;
  creatorId: string;
};

const UserNotes: FC<UserNotesProps> = ({}) => {
  const [data, setData] = useState<Notes[]>([]);
  // const [updatedTitle, setUpdatedTitle] = useState("");
  // const [updatedText, setUpdatedText] = useState("");
  const [noteIdToEdit, setNoteIdToEdit] = useState<string | null>(null);
  const [updatedNoteData, setUpdatedNoteData] = useState<{
    [id: string]: Partial<Notes>;
  }>({});

  const [user] = useAuthState(auth);

  const USERUID = user?.uid;

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
    const getDataRef = await getDocs(collection(db, "notes"));
    const querySnapshot = getDataRef;
    setData(
      querySnapshot.docs.map((doc) => ({
        // creatorId: USERUID,
        ...doc.data(),

        id: doc.id,
      })) as Notes[]
    );
  };

  console.log(USERUID);

  useEffect(() => {
    // Fetch data from Firebase on component mount

    fetchData();
  }, []);

  const editNote = async (noteId: string, updatedData: Partial<Notes>) => {
    try {
      await updateDoc(doc(db, "notes", noteId), updatedData);
      toast({
        title: "Entry Edited, and saved",
        description: "Your entry has been saved 🎉",
      });

      // Fetch the updated data from Firebase again
      fetchData();
      // Clear the noteIdToEdit and updatedNoteData after editing
      setNoteIdToEdit("");
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
      setData(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),

          id: doc.id,
        })) as Notes[]
      );
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="font-sans " suppressHydrationWarning>
      {data.length === 0 ? (
        <div className="font-sans">
          You haven&apos;t recorded anything. Click on New Entry above to begin
          your amazing journaling journey.
        </div>
      ) : (
        data
          ?.filter((item) => {
            return item?.creatorId === USERUID;
          })
          .map((noteItem) => {
            const isEditing = noteIdToEdit === noteItem.id;

            // You should provide a unique key for each element when mapping over an array.
            // Consider using a combination of `noteItem.id` and a unique string to ensure uniqueness.
            // For example: `key={`note-${noteItem.id}`}`
            return (
              <div
                key={noteItem.id} // Add a unique key here
                className="flex flex-col border shadow-md px-4 py-4 rounded-lg mb-4 lg:ml-32 lg:mr-32"
              >
                <div className="flex flex-col">
                  {isEditing ? (
                    <>
                      <Input
                        type="text"
                        value={
                          updatedNoteData[noteItem.id]?.title || noteItem.title
                        }
                        onChange={(e) =>
                          handleTitleChange(noteItem.id, e.target.value)
                        }
                        placeholder="Enter updated title"
                        className="mb-2"
                      />
                      <Input
                        type="text"
                        value={
                          updatedNoteData[noteItem.id]?.text || noteItem.text
                        }
                        onChange={(e) =>
                          handleTextChange(noteItem.id, e.target.value)
                        }
                        placeholder="Enter updated text"
                      />
                    </>
                  ) : (
                    <div>
                      {/* Display the current values */}
                      <div>{noteItem.title}</div>
                      <div>{noteItem.text}</div>
                      <div>{noteItem.created_at}</div>
                    </div>
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
                          This action cannot be undone. This will permanently
                          delete your note titled{" "}
                          <span className="font-medium text-xl">
                            {noteItem.title}
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

                  {isEditing ? (
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
                          // You should provide feedback to the user when no changes were made.
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
          })
      )}
    </div>
  );
};

export default UserNotes;
