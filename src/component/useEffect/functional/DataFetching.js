import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetching() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState([1]);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [idFromButtonClick]);
  const clickHandler = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={clickHandler}>fetch post</button>
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
