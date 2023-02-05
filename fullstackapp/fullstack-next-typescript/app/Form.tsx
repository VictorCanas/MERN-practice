"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPost() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  //Create a submit post
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch("/api/createPosts", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    router.refresh();
    if (!res.ok) console.log(res.message);
  }

  //TODO Work next on displaying this in a better way - maybe in the middle - form, make a new post, displaying data

  return (
    <form onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <button type="submit">Make a new post</button>
    </form>
  );
}
