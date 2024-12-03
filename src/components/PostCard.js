import React, { useEffect, useState } from "react";

// Avatar Component
const Avatar = ({ userId }) => {
  return (
    <img
      src={`https://picsum.photos/seed/${userId}/50`}
      alt="User Avatar"
      className="w-12 h-12 rounded-full border border-gray-300"
    />
  );
};

// PostBody Component
const PostBody = ({ title, body }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-700 mt-2">{body}</p>
    </div>
  );
};

// CommentsSection Component
const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);

  return (
    <div className="comments-section mt-4">
      <h3 className="text-md font-semibold mb-2">Comments</h3>
      <div className="z-10">
        {comments.length > 0 ? (
          <ul className="space-y-3">
            {comments.map((comment) => (
              <li key={comment.id} className="border-b pb-2">
                <p className="text-gray-800 font-medium">{comment.name}</p>
                <p className="text-gray-600 text-sm">{comment.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments available.</p>
        )}
      </div>
    </div>
  );
};

// PostCard Component
const PostCard = ({ post, usernames }) => {
  // const user = usernames.find((user) => user.id === post.userId) || {
  //   name: "Anonymous",
  // };
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <div className="post-card bg-white border border-gray-300 p-4 rounded-lg shadow-md mb-6">
      {/* Image */}
      <img
        src={`https://picsum.photos/seed/${post.id}/600/300`}
        alt="Post"
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Post Header */}
      <div className="flex items-center mb-4">
        <Avatar userId={post.userId} />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{"user.name"}</h3>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
      </div>

      {/* Post Body */}
      <PostBody title={post.title} body={post.body} />

      {/* Like Button */}
      <div className="mt-4 flex">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
          Like
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 ml-1 rounded-lg shadow hover:bg-blue-600">
          Report
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Comments Section */}
      {/* Comments Toggle Button */}
      <button
        onClick={toggleComments}
        className="text-blue-500 btn font-medium hover:text-blue-700"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {/* Conditionally Render Comments */}
      {showComments && <CommentsSection postId={post.id} />}
    </div>
  );
};

export default PostCard;
