import "./navbar.scss";
import { Link } from "react-router-dom"

const Navbar = () => {

  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 100)
  })

  return (
    <header id="header">
      <div className="left">
        <h1>Arijitdev</h1>
      </div>
      <ul id="primary">
        <Link className="link"><a href="/">Home</a></Link>
        <Link to="/profile" className="link"><a>Profile</a></Link>
        <Link className="link"><a href="/profile">Works</a></Link>
        <Link className="link"><a href="/profile">About</a></Link>
        <Link className="link"><a href="/profile">Contacts</a></Link>
      </ul>
    </header>
  )
}

export default Navbar