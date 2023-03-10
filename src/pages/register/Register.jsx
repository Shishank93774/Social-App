import "./register.css";
import { useRef } from "react";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Hansky</h3>
          <span className="registerDesc">
            Stay connected and never miss a beat with Hansky.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <div className="registerBox">
              <input
                placeholder="Username"
                required
                ref={username}
                className="registerInput"
              />
              <input
                placeholder="Email"
                required
                ref={email}
                type={email}
                className="registerInput"
              />
              <input
                placeholder="Password"
                required
                ref={password}
                type={password}
                className="registerInput"
              />
              <input
                placeholder="Confirm Password"
                required
                ref={passwordAgain}
                type={password}
                className="registerInput"
              />
              <button className="registerButton">Sign Up</button>
              <button className="registerRegisterButton">
                Log into you Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
