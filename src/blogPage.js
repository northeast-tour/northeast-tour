// src/blogPage.js
import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function BlogPage({ selectedTag }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    };

    fetchBlogs();
  }, []);

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags?.includes(selectedTag))
    : posts;

  return (
    <div style={{ padding: "10px 0" }}>
      {filteredPosts.length === 0 && <p>No blog posts found.</p>}
      {filteredPosts.map(post => (
        <div key={post.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {post.tags && (
            <div style={{ marginBottom: "10px" }}>
              {post.tags.map((tag, idx) => (
                <span key={idx} style={{ backgroundColor: "#eee", marginRight: "8px", padding: "3px 7px", borderRadius: "4px" }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
          <small style={{ color: "#888" }}>
            Posted on {post.createdAt?.toDate().toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
