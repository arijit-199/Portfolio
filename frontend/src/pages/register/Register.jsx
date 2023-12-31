// import "./register.scss";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

const Register = () => {

  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);
  const [success, setSuccess ] = useState(null);

//   const handleChange = (e) => {
//     setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
//     setErr(null);
//     setSuccess(null)
//   }

//   const handleClick = async (e) => {
//     e.preventDefault();
//     setErr(null);
//     setSuccess(null);
//     try {
//       const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
//       setSuccess(res.data);
//     } catch (err) {
//       setErr(err.response.data);
//     }
//   };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Arijit Social</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <span>Do you have an account?</span>
          {/* <Link to="/login"> */}
            <button>Login</button>
          {/* </Link> */}
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              name="name"
            //   onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
            //   onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
            //   onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
            //   onChange={handleChange}
            />
            {err && <p>{err}</p>}
            {success && <span>{success}</span>}
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register