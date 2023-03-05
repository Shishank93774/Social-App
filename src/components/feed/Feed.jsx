import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("post/profile/" + username)
        : await axios.get("post/timeline/6404d1bc17e154df43a7efdb");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share username={username} />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
