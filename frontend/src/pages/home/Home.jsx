import "./home.scss";
// import { useNavigate } from "react-router-dom";

const Home = () => {

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/login");
  // }

  return (
    <div className="home">
      <div className="content">
        <h1>
          Your most welcome!
        </h1>
        <p>
          Hey, its so nice to see you here! I very warm-heartedly greet you in my portfolio website, and want to sweeten your valuable time here. I hope you would surely like to explore, and that's why I try my best to make this a satisfying experience.
        </p>
        <p className="name">Arijit Ghosh</p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill">
          <div className="item">
            <p>Html</p>
          </div>
          <div className="item">
            <p>CSS</p>
          </div>
          <div className="item">
            <p>Sass</p>
          </div>
          <div className="item">
            <p>Bootstrap</p>
          </div>
          <div className="item">
            <p>Javascript</p>
          </div>
        </div>
        <div className="skill">
          <div className="item">
            <p>React</p>
          </div>
          <div className="item">
            <p>React native</p>
          </div>
          <div className="item">
            <p>Node</p>
          </div>
          <div className="item">
            <p>MySql</p>
          </div>
          <div className="item">
            <p>Express</p>
          </div>
        </div>
      </div>
      <div className="works">
        <h1>Some works</h1>
        <div className="work">
          <div className="item">
            Shoping Cart
          </div>
          <div className="item">
            Blog app
          </div>
          <div className="item">
            Facebook clone
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home