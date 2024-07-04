import "./navbar.scss";
import { Link } from "react-router-dom"
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";


const Navbar = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 100)
  });

  const handleGoToHome = () => {
    setModalVisible(!modalVisible)
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

  const handleGoToProfileMobile = () => {
    setModalVisible(!modalVisible)
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    })
  };

  const handleGoToSkilsMobile = () => {
    setModalVisible(!modalVisible)
    window.scrollTo({
      top: 2300,
      behavior: "smooth",
    })
  };

  const handleGoToServices = () => {
    setModalVisible(!modalVisible)

    window.scrollTo({
      top: 1900,
      behavior: "smooth",
    })
  };

  const handleGoToServicesMobile = () => {
    setModalVisible(!modalVisible)

    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    })
  };

  const handleGoToWorks = () => {
    setModalVisible(!modalVisible)

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

  const handleGoToAboutMobile = () => {
    setModalVisible(!modalVisible)
    
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    })
  };

  const handleGoToContacts = () => {
    setModalVisible(!modalVisible)

    window.scrollTo({
      top: 660,
      behavior: "smooth",
    })
  };

  return (
    <header id="header">
      <div className="main">
        <div className="left">
          <h1 style={{color: "antiquewhite",  fontWeight: "700"}}>Arijitdev</h1>
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
        <div className="right" onClick={() => setModalVisible(!modalVisible)}>
          <MdOutlineMenu size={22} color="#ffffff" />
        </div>
      </div>
      {modalVisible &&
        <div className="modal">
          <div className="column">
            <div className="closeBtn" onClick={() => setModalVisible(false)}>&times;</div>
            <ul className="modalMenu">
              <Link className="link" onClick={handleGoToHome}>
                <a href="/">Home</a>
              </Link>
              <Link className="link" onClick={handleGoToProfileMobile}>
                <a href="/profile">Profile</a>
              </Link>
              <Link className="link" onClick={handleGoToSkilsMobile}>
                <a href="/profile">Skills</a>
              </Link>
              <Link className="link" onClick={handleGoToServicesMobile}>
                <a href="/profile">Education</a>
              </Link>
              <Link className="link" onClick={handleGoToWorks}>
                <a href="/profile">Works</a>
              </Link>
              <Link className="link" onClick={handleGoToAboutMobile}>
                <a href="/profile">About</a>
              </Link>
            </ul>
          </div>

        </div>
      }
    </header>
  )
}

export default Navbar