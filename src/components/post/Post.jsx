import { useState, useEffect } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [isReacted, setIsReacted] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  const handleReaction = () => {
    setIsReacted(!isReacted);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={PF + user.profileImg || PF + "person/noAvatar.jpg"}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              className="postReactionImg likeReaction"
              onClick={handleReaction}
            />
            <img
              src="/assets/heart.png"
              alt=""
              className="postReactionImg heartReaction"
              onClick={handleReaction}
            />
            <img
              src="/assets/happy.png"
              alt=""
              className="postReactionImg happyReaction"
              onClick={handleReaction}
            />
            <span className="reactionCounter">
              {isReacted && "you and "} {52 + post.likes.length} people reacted
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{9} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
