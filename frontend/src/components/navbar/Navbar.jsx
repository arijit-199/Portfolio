import "./navbar.scss";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>ARIJITDEV</h1>
      </div>
      <div className="right">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/">Profile</Link>
        <Link className="link" to="/">Works</Link>
        <Link className="link" to="/">About</Link>
        <Link className="link" to="/">Contacts</Link>
      </div>
    </div>
  )
}

export default Navbar