"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { auth, db } from "@/config/Firestore_d";
import { ToastAction } from "@radix-ui/react-toast";
import { addDoc, collection } from "firebase/firestore";

import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

function PostForm() {
  const postRef = collection(db, "community");
  const [user] = useAuthState(auth);
  const [post, setPost] = useState<string>("");
  let username = localStorage.getItem("tempUser");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      post: "",
    },
  }); //enforcing validations

  const createPost = async () => {
    // let username = usersname;
    // e.preventDefault();

    try {
      await addDoc(postRef, {
        post,
        username,

        // userId: user?.uid,
        // username,
      });

      if (postRef) {
        toast({
          title: "Posted",
          description: `Successfully Posted!🎉`,
        });
      }

      // setPost("");
    } catch (e) {
      console.log(e);
    }

    setPost("");
  };

  return (
    <div className="lg:mt-1 mt-3   ">
      <h3 className="text-md mb-2 underline text-center">
        Post to the community
      </h3>
      <form
        onSubmit={handleSubmit(createPost)}
        className="flex flex-col justify-center items-center lg:px-44  xl:px-44"
      >
        <Textarea
          placeholder="what's happening?"
          value={post}
          {...register("post", {
            required:
              "Hey, this is a required field, maybe you forgot to add it",
            minLength: {
              value: 4,
              message: "Title should be at least 4 characters long.",
            },
          })}
          onChange={(e) => setPost(e.target.value)}
        />
        <small className="text-red-600 mt-1 text-center">
          {errors.post?.message}
        </small>
        <Button className="mt-2 w-full " type="submit">
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
