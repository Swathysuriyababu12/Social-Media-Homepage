import React, { useEffect, useState } from "react";
import PostCard from "./components/PostCard";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="mx-auto p-12 w-[40%]">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Social Media Homepage
      </h1>
      {/* Fixed 3 cards per row */}
      <div className="grid grid-cols-1">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
