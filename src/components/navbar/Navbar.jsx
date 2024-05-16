import "./navbar.scss";
import { Link } from "react-router-dom"

const Navbar = (props) => {

  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 100)
  });

  const handleGoToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };

  const handleGoToProfile = () => {
    window.scrollTo({
      top: 2900,
      behavior: "smooth",
    })
  };

  const handleGoToServices = () => {
    window.scrollTo({
      top: 1900,
      behavior: "smooth",
    })
  };

  const handleGoToWorks = () => {
    window.scrollTo({
      top: 6900,
      behavior: "smooth",
    })
  };

  const handleGoToAbout = () => {
    window.scrollTo({
      top: 660,
      behavior: "smooth",
    })
  };

  const handleGoToContacts = () => {
    window.scrollTo({
      top: 660,
      behavior: "smooth",
    })
  };

  return (
    <header id="header">
      <div className="left">
        <h1>Arijitdev</h1>
      </div>
      {/* <button >Go to about</button> */}
      <ul id="primary">
        <Link className="link" onClick={handleGoToHome}>
          <a href="/">Home</a>
        </Link>
        <Link className="link" onClick={handleGoToProfile}>
          <a href="/profile">Profile</a>
        </Link>
        <Link className="link" onClick={handleGoToServices}>
          <a href="/profile">Services</a>
        </Link>
        <Link className="link" onClick={handleGoToWorks}>
          <a href="/profile">Works</a>
        </Link>
        <Link className="link" onClick={handleGoToAbout}>
          <a href="/profile">About</a>
        </Link>
        <Link className="link" onClick={handleGoToContacts}>
          <a href="/profile">Contacts</a>
        </Link>
      </ul>
    </header>
  )
}

export default Navbar