import "./online.css";

const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={user.profileImg} alt="" className="rightbarProfileImg" />
        <span className="onlineBadge"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};

export default Online;
