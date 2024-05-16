import "./profile.scss";
import banner from "../../images/nature_green_maple_leaves_tree_branches.jpg";
import proficPic from "../../images/header-bg-1.jpg";



const Profile = () => {
  return (
    <div className="profile">
      <div className="banner">
        <img src={banner} alt="" />
        <div className="profilePic">
          <img src={proficPic} alt="" />
        </div>
      </div>
      <div className="content">
        <div className="info">
          <h1>Arijit Ghosh</h1>
          <p>Developer</p>
          <div className="span">
            <span>Frontend developer</span>
            <span>Backend developer</span>
            <span>Fullstack developer</span>
          </div>
          <div className="contacts">
            <p>Email: arijitghosh828@gmail.com</p>
            <p>Mobile: 7003993095</p>
          </div>
          <div className="basic">
            <p>Age: 27</p>
            <p>Location:   <span>Naihati, Kolkata</span></p>
            <p>Gender: Male</p>
            <p>Hobbies: Music, Story books</p>
            <p>Communication: English<br/>Bengali, Hindi</p>
          </div>
        </div>

        <div className="details">
          <h2>Experiences</h2>
          <div className="item">
            <p>React Developer</p>
            <p>Influx IQ Tech Pvt. Ltd.</p>
            <span>Jul, 2022 - Oct, 2022</span>
          </div>
          <div className="item">
            <p>React Developer</p>
            <p>Radiant</p>
            <span>Aug, 2023 - Oct, 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile