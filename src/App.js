import React, { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import { usernames } from "./components/usernames";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="mx-auto p-12 w-[40%]">
      <div className="flex-1">
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Social Media</h1>
          <ul className="hidden md:flex space-x-6">
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
              Home
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
              Notifications
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
              Messages
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md md:hidden">
            Menu
          </button>
        </nav>
      </div>

      {/* Fixed 3 cards per row */}
      <div className="grid grid-cols-1">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} usernames={usernames} />
        ))}
      </div>
    </div>
  );
};

export default App;
