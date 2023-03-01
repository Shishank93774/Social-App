import "./rightbar.css";
import { Users } from '../../dummyData';
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <strong> Gabriel Williams</strong> and{" "}
            <strong>3 other friends </strong>
            have birthday today.
          </span>
        </div>
        <div className="rightbarAds">
          <img
            src="/assets/advertisement/1.jpg"
            alt=""
            className="rightbarAd"
          />
          <img
            src="/assets/advertisement/4.jpg"
            alt=""
            className="rightbarAd"
          />
        </div>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map(user => <Online key={user.id} user={user} />) }
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
