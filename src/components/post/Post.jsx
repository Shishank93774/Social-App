import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from '../../dummyData';

const Post = ({post}) => {
  const user = Users.filter(user => user.id === post.userId)[0];
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user.profileImg}  alt="" className="postProfileImg" />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              className="postReactionImg likeReaction"
            />
            <img
              src="/assets/heart.png"
              alt=""
              className="postReactionImg heartReaction"
            />
            <img
              src="/assets/happy.png"
              alt=""
              className="postReactionImg happyReaction"
            />
            <span className="reactionCounter">{post.like} people reacted</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
