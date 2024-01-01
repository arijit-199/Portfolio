import "./profile.scss";
import banner from "../../images/pexels-justiniano-adriano-1864189.jpg";
import proficPic from "../../images/pexels-pok-rie-1905045.jpg";

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
        </div>
      </div>
    </div>
  )
}

export default Profile