import { useState, useEffect } from "react";
import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import axios from "axios";

const Share = ({username}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  username = username || "Gese Zimmermann";
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data)
    }
    fetchUser();
  },[username]);
  
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
            <img src={PF + user.profileImg} alt="" className="shareProfileImg" />
            <input placeholder={`What's in your mind ${username}?`} className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                    <span className="shareOptionText"> Photo or Video </span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor="blue" className="shareIcon" />
                    <span className="shareOptionText"> Tag </span>
                </div>
                <div className="shareOption">
                    <RoomIcon htmlColor="green" className="shareIcon" />
                    <span className="shareOptionText"> Location </span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor="goldenrod"
                    className="shareIcon" />
                    <span className="shareOptionText"> Feeling </span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;