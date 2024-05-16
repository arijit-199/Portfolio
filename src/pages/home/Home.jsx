import "./home.scss";
import profileImg from "../../images/pexels-veeterzy-303383.jpg";
import img2 from "../../images/DesktopBackground.jpg";
import img3 from "../../images/header-bg-1.jpg";
import img4 from "../../images/pexels-justiniano-adriano-1864189.jpg";
import img5 from "../../images/pexels-pixabay-39284.jpg";
import img6 from "../../images/nature_green_maple_leaves_tree_branches.jpg";
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


  const expTitle1 = "Frontend React & React Native Developer";
  const expTitle2 = "React Native Developer";
  const expTitle3 = "React Native Developer";

  const expDetails1 = "May, 2022 - Oct, 2022, Influx IQ Pvt. Ltd.";
  const expDetails2 = "Aug, 2023 - Oct, 2023, Radiant";
  const expDetails3 = "Jan, 2024 - April, 2024, GS Software Pvt. Ltd.";

  const expDesc1 = "Frontend development of a web app using React";
  const expDesc2 = "Frontend development of an android application using React Native";
  const expDesc3 = "Frontend and backend developement of a android application using React Native Framework for frontend, and Node and Express for backend, using MongoDb database.";

  const arrow = ">";

  const style = {
    marginTop: -17
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
          <p>Fullstack Developer</p>
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
              <p>Hello! I’m Arijit Ghosh, Web Developer with over 6 months of experience. Experienced with stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, React, React native, MySql, Nodejs, Express. Strong background in management and leadership.</p>

              <div className="info">
                <p><span>Name: </span>Arijit Ghosh</p>
                <p><span>Date of birth: </span>19 May 1996</p>
                <p><span>Nationality: </span>Indian</p>
                <p><span>Address: </span>25/11, R.B Road, Rabindrapalli, Naihati-743165, West Benagal, India</p>
                <p><span>Phone: </span>(+91) 7003993095</p>
                <p><span>Email: </span>arijitghosh828@gmail.com</p>
                <p><span>LinkedIn: </span>https://www.linkedin.com/in/arijit-ghosh-1996-abc</p>
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

        {/* <---Services section---> */}
        <div className="services-section">
          <h1>Services Provide</h1>

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
                <p><span>{arrow}</span>HTML/HTML5</p>
                <p><span>{arrow}</span>CSS/CSS3</p>
                <p><span>{arrow}</span>SASS Pre-processor</p>
                <p><span>{arrow}</span>Javascript(ES6)</p>
                <p><span>{arrow}</span>Bootstrap</p>
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
              <div className="details"  style={fontWeight}>
                <p><span>{arrow}</span>MySql/MongoDB</p>
                <p><span>{arrow}</span>Node</p>
                <p><span>{arrow}</span>Express</p>
                <p><span>{arrow}</span>CRUD Operations</p>
                <p><span>{arrow}</span>REST API</p>
                <p><span>{arrow}</span>Modern Authentications, Tokens</p>
                <p><span>{arrow}</span>Cookies & Caches</p>
              </div>
            </div>
          </div>
        </div>

        {/* <---Qualification section---> */}
        <div className="qaulification-section">
          <h1>Education</h1>
          <div className="section">
            <RoadMapStart logo={<GiGraduateCap />} style={height} />
            <RoadMapBar Title={Title1} Details={Details1} Desc={Desc1} />
            <Line style={margin}/>
            <RoadMapBar Title={Title2} Details={Details2} Desc={Desc2} />
            <Line />
            <RoadMapBar Title={Title3} Details={Details3} Desc={Desc3} />
            <Line style={marginTop}/>
            <RoadMapEnd />
          </div>
        </div>

        {/* <---Experience section---> */}
        <div className="experience-section">
          <h1>Experience</h1>
          <div className="section">
            <RoadMapStart logo={<MdOutlineWork />} />
            <RoadMapBar Title={expTitle1} Details={expDetails1} Desc={expDesc1} />
            <Line />
            <RoadMapBar Title={expTitle2} Details={expDetails2} Desc={expDesc2} />
            <Line style={style}/>
            <RoadMapBar Title={expTitle3} Details={expDetails3} Desc={expDesc3} />
            <Line style={style}/>
            <RoadMapEnd />
          </div>
        </div>

        {/* <---Professional Skills---> */}
        <div className="professional-skills">
          <h1>Profesional Skills</h1>

          <div className="skills">
            <div className="skill-row">
              <ProgressBar skillName={"HTML, CSS, Sass, Javascript"} skillValue={"90%"} left={"225%"} />
              <ProgressBar skillName={"React"} skillValue={"90%"} left={"225%"} />
              <ProgressBar skillName={"React Native"} skillValue={"85%"} left={"212.5%"} />
              <ProgressBar skillName={"Next"} skillValue={"70%"} left={"200%"} />
            </div>

            <div className="skill-row">
              <ProgressBar skillName={"MongoDB"} skillValue={"70%"} left={"175%"} />
              <ProgressBar skillName={"MySql"} skillValue={"70%"} left={"175%"} />
              <ProgressBar skillName={"Node"} skillValue={"70%"} left={"175%"} />
              <ProgressBar skillName={"Express"} skillValue={"85%"} left={"212.5%"} />
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
            <div className="work">
              <img src={profileImg} alt="" />
              <p>Frontend Design (Coming soon)</p>
            </div>
            <div className="work">
              <img src={img2} alt="" />
              <p>Blog App (Coming soon)</p>
            </div>
            <div className="work">
              <img src={img3} alt="" />
              <p>Facebook Clone (Coming soon)</p>
            </div>
            <div className="work">
              <img src={img4} alt="" />
              <p>Shopping App (Coming soon)</p>
            </div>
            <div className="work">
              <img src={img5} alt="" />
              <p>E-commerce(Coming soon)</p>
            </div>
            <div className="work">
              <img src={img6} alt="" />
              <p>Blog App (Coming soon)</p>
            </div>
          </div>
          <button>Load More</button>
        </div>
      </div>
    </>
  );
};

export default Home