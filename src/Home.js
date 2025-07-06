// src/Home.js
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import BlogForm from "./BlogForm";
import BlogPage from "./blogPage";
import Login from "./Login";

export default function Home() {
  const [user, setUser] = useState(null);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Northeast Tour & Travels</h1>

      {user ? (
        <>
          <p style={{ color: "green" }}>✅ Logged in as {user.email}</p>
          <button onClick={() => signOut(auth)}>Logout</button>
          <BlogForm />
        </>
      ) : (
        <Login onLogin={() => window.location.reload()} />
      )}

      <h2>Blog</h2>
      <BlogPage selectedTag={selectedTag} />
    </div>
  );
}
