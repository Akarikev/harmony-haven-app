"use client";

import { db } from "@/config/Firestore_d";
import { getDocs, query, collection, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { usersname } from "@/data/random-names";
import { Button } from "@/components/ui/button";
type PostTypes = {
  post: string;
  id: string;
  usersname: string;
};

function Posts() {
  const [fetchPosts, setFetchPosts] = useState<PostTypes[]>([]);
  const [removeLike, setRemoveLike] = useState("");

  const fetchDataPost = async () => {
    // Get the current user's UID and pass it to a function that fetches their posts in Firestore

    try {
      const querySnapshot = await getDocs(collection(db, "community"));

      //   const fetchData: PostTypes[] = querySnapshot.docs.map((doc) => ({
      //     id: doc.id,
      //     usersname,
      //     ...doc.data(),
      //   }));

      setFetchPosts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          usersname: localStorage.getItem(usersname),
        })) as PostTypes[]
      );

      //   setFetchPosts(fetchData);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  //call the posts evokes
  useEffect(() => {
    fetchDataPost();
  }, []);

  return (
    <div className="mt-4 lg:px-44">
      <h1 className="text-2xl font-medium">Top Posts</h1>
      {/* TODO */}
      {fetchPosts.map((postItem) => {
        return (
          <div key={postItem.id} className="">
            <p>{postItem.post}</p>
            <small>by: @{postItem.usersname}</small>
            <Button>👍</Button>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
