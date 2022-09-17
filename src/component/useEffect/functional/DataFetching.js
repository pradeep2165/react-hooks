import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetching() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState([1]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);
  console.log(posts);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <p>{posts.title}</p>
    </div>
  );
}

export default DataFetching;
