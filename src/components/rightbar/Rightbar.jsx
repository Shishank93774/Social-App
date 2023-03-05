import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Rightbar = ({ user }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={`${PF}/gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <strong> Gabriel Williams</strong> and{" "}
            <strong>3 other friends </strong>
            have birthday today.
          </span>
        </div>
        <div className="rightbarAds">
          <img
            src={`${PF}/advertisement/2.jpg`}
            alt=""
            className="rightbarAd"
          />
          <img
            src={`${PF}/advertisement/4.jpg`}
            alt=""
            className="rightbarAd"
          />
        </div>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}/person/2.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightFollowingName">Johhny</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/3.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightFollowingName">Johhny</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/5.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightFollowingName">Johhny</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/6.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightFollowingName">Johhny</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/7.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightFollowingName">Johhny</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/person/9.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightFollowingName">Johhny</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  );
};

export default Rightbar;
