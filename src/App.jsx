import './App.css';
import { useState } from "react";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [inputs, setInputs] = useState({title:"", content: ""})
  
  const postBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      {title: inputs.title, content: inputs.content, date: new Date().toString()},
    ]);
    setInputs({title: "", content: ""});
  };

  const deleteBlogPosts = () => {
    setBlogPosts([]);
  }

  const removeBlogPost = (uid) => {
    setBlogPosts(blogPosts.filter((b) => b.date !== uid));
  }

  return (
    <main>
      <input type="text" placeholder="Title" value={inputs.title} onChange={(event) => setInputs({...inputs, title: event.target.value})} />
      <input type="text" placeholder="Content" value={inputs.content} onChange={(event) => setInputs({...inputs, content: event.target.value})} />
      <button onClick={postBlogPost}>Post</button>
      <h1>Posztok</h1>
      {blogPosts.map((blogPost, index) => (
        <article key={index}>
          <h2>{blogPost.title}</h2>
          <p>{blogPost.content}</p>
          <p>{blogPost.date}</p>
          <input type="text" placeholder="Title"/>
          <input type="text" placeholder="Content"/>
          <button>Edit</button>
          <button>Save</button>
          <button>Cancel</button>
          <button onClick={() => removeBlogPost(blogPost.date)}>Remove</button>
        </article>
      ))}
      <button onClick={deleteBlogPosts}>Remove All</button>
    </main>
  );
}

export default App;
