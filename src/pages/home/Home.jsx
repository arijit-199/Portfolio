import "./home.scss";
import profileImg from "../../images/pexels-veeterzy-303383.jpg";
import img1 from "../../images/blogapp.png";
import img3 from "../../images/facebookclone.png";
import img4 from "../../images/cloudify.png";
import img5 from "../../images/flappybird.png";
import img6 from "../../images/ras-admin.png";
import ProfilePic from "../../images/My pic - Copy.jpg"
import { FaDownload } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { PiVideoFill } from "react-icons/pi";
import { HiPencil } from "react-icons/hi2";
import { GiCoffeeCup } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import ProgressBar from "../../components/progress-bar/progress-bar";
import RoadMapBar from "../../components/road-map-bar/RoadMapBar";
import RoadMapStart from "../../components/road-map-bar/RoadMapStart";
import RoadMapEnd from "../../components/road-map-bar/RoadMapEnd";
import Line from "../../components/road-map-bar/line"

const Home = () => {

  const Title1 = "Diploma in Civil Engineering";
  const Title2 = "Higher Secondary Educatuon";
  const Title3 = "Secondary Education";

  const Details1 = "Technique Polytechnic Institiute, Hooghly";
  const Details2 = "Barrackpore Centarl Model School, (CBSE)";
  const Details3 = "Kalyani Central Model School, (CBSE)";

  const Desc1 = "Completed Diploma in Civil Engineering, from Technique Polytechnic Institute, with a total 82% marks, and first class Ditsinction";
  const Desc2 = "Completed Higher Secondary Educatuon, from Barrackpore Centarl Model School, (CBSE Board), with a total 60% marks, with having subjects English, Bengali, Physics, Chemitsry and Mathematics";
  const Desc3 = "Completed Secondary Education, from Kalyani Central Model School, with a total 72% marks, (CBSE Board, with having subjects English, Bengali, Physics, Chemitsry and Mathematics";


  const expTitle1 = "React & React Native Developer";
  const expTitle2 = "React Native Developer";

  const company1 = "GS Software Pvt. Ltd.";
  const company2 = "Radiant Technologies";

  const tenure1 = "Jan, 2024 - Apr, 2024";
  const tenure2 = "May, 2023 - Oct, 2023";

  const expDesc1 = "Frontend development of a admin panel using React.Js library";
  const expDesc2 = "Frontend and backend developement of a android application using React Native Framework for frontend, and Node and Express for backend, using MongoDb database.";
  const expDesc3 = "Frontend development of an android application using React Native, is now on Google Play Store (Overseas.ai)";

  const projectDetails1 = "Rajumar Ambulance Service - Admin panel";
  const projectDetails2 = "Rajumar Ambulance Service(Android)";
  const projectDetails3 = "Overseas.ai(Android)";

  const arrow = ">";

  const style = {
    marginTop: -38,
    height: 175
  }

  const fontWeight = {
    fontWeight: "500"
  }
  const height = {
    height: 98
  }
  const margin = {
    marginTop: -18,
    marginBottom: -34
  }
  const marginTop = {
    marginTop: -18
  }

  const openGithubAccount = () => {
    window.open("https://github.com/arijit-199?tab=repositories");
  }

  const openLinkedinAccount = () => {
    window.open("https://www.linkedin.com/in/arijit-ghosh-1996-abc")
  }

  const openBlogApp = () => {
    window.open("https://github.com/arijit-199/Blog-app")
  }

  const openFacebookCloneApp = () => {
    window.open("https://github.com/arijit-199/Facebook-clone-web")
  }

  return (
    <>
      <div className="home">

        {/* <---Banner section---> */}
        <div className="wrapper">
          <div className="banner">
          </div>
        </div>

        {/* <---Greeting text---> */}
        <div className="greet">
          <h1>
            Hello!
          </h1>
          <h3>
            <span>I'm </span>Arijit Ghosh
          </h3>
          <p>Fullstack Developer(MERN)</p>
        </div>

        {/* <---Content section---> */}
        <div className="content">
          <div className="row">
            <div className="img">
              <img src={ProfilePic} alt="" />
              <div className="backImg"></div>
              <button><span><FaDownload /></span>Get Resume</button>
            </div>

            <div className="about">
              <h1>About Me</h1>
              <p>Hello! I’m Arijit Ghosh, Mernstack web  & android developer with 1+ year of experience. Having in-depth knowledge including advanced HTML5, CSS3, JavaScript, SASS, React, React native, MySql, MongoDB, Nodejs, Express.</p>

              <div className="info">
                <p>Name: <span>Arijit Ghosh</span></p>
                <p>Date of birth:<span> 19 May 1996</span></p>
                <p>Nationality: <span>Indian</span></p>
                <p>Address: <span>25/11, R.B Road, Rabindrapalli, Naihati-743165, West Benagal, India</span></p>
                <p>Phone: <span>(+91) 7003993095</span></p>
                <p>Email: <span>arijitghosh828@gmail.com</span></p>
                <p>LinkedIn: <span className="link" onClick={() => openLinkedinAccount()}>https://www.linkedin.com/in/arijit-ghosh-1996-abc</span></p>
                <p>Github: <span className="link" onClick={() => openGithubAccount()}>https://github.com/arijit-199?tab=repositories</span></p>
              </div>
            </div>
          </div>

          <div className="interest">
            <h1>My Interests</h1>
            <div className="icons">
              <div id="music" className="icon">
                <div className="item">
                  <FaMusic />
                </div>
                <p className="iconText">Music</p>
              </div>
              <div id="music" className="icon">
                <div className="item">
                  <IoBookSharp />
                </div>
                <p className="iconText">Reading</p>
              </div>
              <div id="music" className="icon">
                <div className="item">
                  <PiVideoFill />
                </div>
                <p className="iconText">Movies</p>
              </div>
              <div id="music" className="icon">
                <div className="item">
                  <HiPencil />
                </div>
                <p className="iconText">Writing</p>
              </div>
              <div id="music" className="icon">
                <div className="item">
                  <GiCoffeeCup />
                </div>
                <p className="iconText">Coffee</p>
              </div>

            </div>
          </div>
        </div>

        {/* <---Experience section---> */}
        <div className="experience-section">
          <h1>Profesional Experience</h1>
          <div className="section">
            <RoadMapStart logo={<MdOutlineWork />} />
            <RoadMapBar Title={expTitle1} Company={company1} Tenure={tenure1} Desc1={expDesc1} Desc2={expDesc2} Project1={projectDetails1} Project2={projectDetails2} />
            <Line />
            <RoadMapBar Title={expTitle2} Company={company2} Tenure={tenure2} Desc1={expDesc3} Project1={projectDetails3} />
            <Line style={style} />
            <RoadMapEnd />
          </div>


          {/* For Mobile View */}
          <div className="mini-section">
            <div className="each-section">
              <div className="title">{expTitle1}</div>
              <p><span className="name">{company1}, </span>{tenure1}</p>
              <div className="projects">
                <div className="name">Projects Done:</div>
                <div className="projectDetails">
                  <p>{projectDetails1}</p>
                  <p>{projectDetails2}</p>
                </div>
              </div>
            </div>
            <div className="each-section">
              <div className="each-section">
                <div className="title">{expTitle2}</div>
                <p><span className="name">{company2}, </span>{tenure2}</p>
                <div className="projects">
                  <div className="name">Projects Done:</div>
                  <div className="projectDetails">
                    <p>{projectDetails3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <---Professional Skills---> */}
        <div className="professional-skills">
          <h1>Profesional Skills</h1>

          <div className="skills">
            <div className="skill-row">
              <ProgressBar skillName={"HTML, CSS, Sass, Javascript"} skillValue={"90%"} left={"86%"} />
              <ProgressBar skillName={"React"} skillValue={"90%"} left={"86%"} />
              <ProgressBar skillName={"React Native"} skillValue={"85%"} left={"82%"} />
              <ProgressBar skillName={"Next"} skillValue={"75%"} left={"76%"} />
            </div>

            <div className="skill-row">
              <ProgressBar skillName={"MongoDB"} skillValue={"80%"} left={"75%"} />
              <ProgressBar skillName={"MySql"} skillValue={"80%"} left={"75%"} />
              <ProgressBar skillName={"Node"} skillValue={"80%"} left={"75%"} />
              <ProgressBar skillName={"Express"} skillValue={"85%"} left={"80%"} />
            </div>
          </div>

          <div className="sub-section">
            <div className="card-container">
              <div className="card">
                <div className="clip">
                </div>
                <h1 id="number">02.</h1>
                <h2 id="text">Frontend developement</h2>
                <p>Frontend resposive design using HTML, CSS, Javascript, SASS, Bootstrap, with React library and/or React Native framework, with clean and documented code, along with git version control.</p>
              </div>

              <div className="card-active">
                <div className="clip-active"></div>
                <h1 id="number">01.</h1>
                <h2 id="text">Fullstack developement</h2>
                <p>HTML, CSS, SASS, Javacsript, Bootstrap for responsive frontend design with clean, and well-documented code. Frontend Modern technologies like React, React Native, Next. And MySql, MongoDB, Node.js, Express.js for backend, with modern authentication techniques like using jsonwebtoken, setting and clearing cookies.</p>
              </div>

              <div className="card">
                <div className="clip"></div>
                <h1 id="number">03.</h1>
                <h2 id="text">Backend developement</h2>
                <p>Simple to complex CRUD operations, table join, generating and creating Restful API, modern-authentication techniques, receiving and sending requests from clients, storing simple to complex data, handling and managing databases, using databases like MongoDB or MySql, and languages like Node and Express.</p>
              </div>
            </div>
          </div>
        </div>

        {/* <---Works Section---> */}
        <div className="work-section">
          <h1>Some of my works</h1>
          <div className="works">
            <div className="work" onClick={() => openBlogApp()}>
              <img src={img1} alt="" />
              <p>Blog App</p>
            </div>
            <div className="work" onClick={() => openFacebookCloneApp()}>
              <img src={img3} alt="" />
              <p>Facebook Clone</p>
            </div>
            <div className="work">
              <img src={img4} alt="" />
              <p>Question answer assignment app</p>
            </div>
            <div className="work">
              <img src={img5} alt="" />
              <p>Flappy bird game</p>
            </div>
            <div className="work">
              <img src={img6} alt="" />
              <p>E-commerce admin panel</p>
            </div>
            <div className="work">
              <img src={profileImg} alt="" />
              <p>Frontend Design (Coming soon)</p>
            </div>
          </div>
          {/* <button>Load More</button> */}
        </div>

        {/* <---Qualification section---> */}
        <div className="qaulification-section">
          <h1>Education</h1>
          <div className="section">
            <RoadMapStart logo={<GiGraduateCap />} style={height} />
            <RoadMapBar Title={Title1} Details={Details1} Desc={Desc1} />
            <Line style={margin} />
            <RoadMapBar Title={Title2} Details={Details2} Desc={Desc2} />
            <Line />
            <RoadMapBar Title={Title3} Details={Details3} Desc={Desc3} />
            <Line style={marginTop} />
            <RoadMapEnd />
          </div>
        </div>


        {/* For Mobile View */}
        <div className="qualification-content">
          <h1>Education</h1>
          <div className="content">
            <h1>{Title1}</h1>
            <p>{Details1}</p>
            <p style={{ color: "#ffffff" }}>{Desc1}</p>
          </div>
          <div className="content">
            <h1>{Title2}</h1>
            <p>{Details2}</p>
            <p style={{ color: "#ffffff" }}>{Desc2}</p>
          </div>
          <div className="content">
            <h1>{Title3}</h1>
            <p>{Details3}</p>
            <p style={{ color: "#ffffff" }}>{Desc3}</p>
          </div>
        </div>

        {/* <---Services section---> */}
        <div className="services-section">
          <h1>Working Area</h1>

          <div className="services">
            <div className="service">
              <div className="corner-shape">
                <div className="inner-shape">
                  <div className="inner-most-shape"></div>
                </div>
              </div>
              <div className="title">
                <h1>Frontend</h1>
              </div>
              <div className="details" style={fontWeight}>
                <p><span>{arrow}</span>HTML</p>
                <p><span>{arrow}</span>CSS/SASS/Bootstrap</p>
                <p><span>{arrow}</span>Javascript/TypeScript</p>
                <p><span>{arrow}</span>Web Development (React, Next)</p>
                <p><span>{arrow}</span>Mobile Development (React Native)</p>
              </div>
            </div>

            <div className="service">
              <div className="corner-shape">
                <div className="inner-shape">
                  <div className="inner-most-shape"></div>
                </div>
              </div>
              <div className="title">
                <h1>Backend</h1>
              </div>
              <div className="details" style={fontWeight}>
                <p><span>{arrow}</span>MySql</p>
                <p><span>{arrow}</span>MongoDB</p>
                <p><span>{arrow}</span>NodeJS</p>
                <p><span>{arrow}</span>Express</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home