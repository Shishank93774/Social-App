import './login.css'

const Login = () => {
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Hansky</h3>
                <span className="loginDesc">Stay connected and never miss a beat with Hansky.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login