import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home")
  }

  return (
    <div className="login">
      <div className="content">
        <h1>Login</h1>
        <div className="container">
          <div className="item">
            <input className="input" name="loginId" placeholder="Username" color={"red"}/>
            <input className="input" name="password" placeholder="Password" />
          </div>
          <div className="buttons">
            <span>Forgot password?</span>
            <button onClick={handleClick}>Login</button>
          </div>
          <button>Create new account</button>
        </div>
      </div>

    </div>
  )
}

export default Login