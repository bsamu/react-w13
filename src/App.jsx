import './App.css';
import { useState } from "react";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  
  const postBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      {title: "Cím 1", content: "Tartalom 1", date: "Dátum 1"},
    ]);
  };

  return (
    <main>
      <input type="text" placeholder="Title"/>
      <input type="text" placeholder="Content"/>
      <button onClick={postBlogPost}>Post</button>
      <h1>Posztok</h1>
      {blogPosts.map((blogPost) => (
        <article>
          <h2>{blogPost.title}</h2>
          <p>{blogPost.content}</p>
          <p>{blogPost.date}</p>
          <input type="text" placeholder="Title"/>
          <input type="text" placeholder="Content"/>
          <button>Edit</button>
          <button>Save</button>
          <button>Cancel</button>
          <button>Remove</button>
        </article>
      ))}
    </main>
  );
}

export default App;
