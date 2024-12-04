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
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white shadow-md p-6">
        <div className="text-center mb-6">
          <img
            className="w-24 h-24 mx-auto rounded-full border-4 border-blue-600"
            src="https://picsum.photos/200"
            alt="User Avatar"
          />
          <h2 className="mt-4 text-xl font-bold text-gray-700">Swathy</h2>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
        <div>
          <ul className="space-y-4">
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
              <span className="font-semibold">Posts: </span>100
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
              <span className="font-semibold">Followers: </span>250
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
              <span className="font-semibold">Following: </span>180
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center rounded-lg mb-6">
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

        {/* Responsive Grid for Posts */}
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} usernames={usernames} />
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white shadow-md p-6">
        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Connect with Others
        </h2>
        <div className="space-y-4">
          {usernames.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`https://picsum.photos/seed/${user.id}/50`}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-gray-700 font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-500">Random Profession</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Connect
              </button>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default App;
