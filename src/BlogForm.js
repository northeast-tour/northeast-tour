// src/BlogForm.js
import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Title and content are required.");

    try {
      await addDoc(collection(db, "blogPosts"), {
        title,
        content,
        tags: tags.split(",").map(tag => tag.trim()),
        createdAt: Timestamp.now()
      });
      setTitle("");
      setContent("");
      setTags("");
      setMessage("✅ Blog post submitted successfully!");
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <div style={{ marginBottom: "30px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>Add Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

export default BlogForm;
