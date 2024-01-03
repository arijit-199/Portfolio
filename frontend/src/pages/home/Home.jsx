import "./home.scss";
import profileImg from "../../images/pexels-veeterzy-303383.jpg";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div className="home">
        <div className="wrapper">
          <div className="banner">
          </div>
        </div>
        <div className="greet">
          <h1>
            Hello!
          </h1>
          <h3>
            <span>I'm </span>Arijit Ghosh
          </h3>
          <p>Frontend Developer</p>
        </div>

        <div className="content">
          <div className="img">
            <img src={profileImg} alt="" />
          </div>
          <div className="about">
            <h1>About Me</h1>
            <p>Hello! I’m Arijit Ghosh, Web Developer with over 6 months of experience. Experienced with stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, React, React native, MySql, Nodejs, Express. Strong background in management and leadership.</p>

            <div className="info">
              <p><span>Name: </span>Arijit Ghosh</p>
              <p><span>Date of birth: </span>19 May 1996</p>
              <p><span>Nationality: </span>Indian</p>
              <p><span>Address: </span>25/11, R.B Road, Rabindraplli, Naihati-743165, West Benagal, India</p>
              <p><span>Phone: </span>(+91) 7003993095</p>
              <p><span>Email: </span>arijitghosh828@gmail.com</p>
            </div>
          </div>
          {/* <button><FaDownload />Get Resume</button> */}
        </div>


        {/* <div className="works">
        <h1>Some works</h1>
        <hr/>
        <div className="work">
          <div className="item">
            Shopping cart
          </div>
          <div className="item">
            Blog
          </div>
          <div className="item">
            facebook clone
          </div>
        </div>
        <div className="container">
          <button class="see-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">See More</span>
          </button>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Home