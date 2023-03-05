import './register.css'

const Register = () => {
  return (
    <div className="registerContainer">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Hansky</h3>
                <span className="registerDesc">Stay connected and never miss a beat with Hansky.</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Confirm Password" className="registerInput" />
                        <button className="registerButton">Sign Up</button>
                        <button className="registerRegisterButton">Log into you Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;