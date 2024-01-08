import "./RoadMapBar.scss";
import { GiGraduateCap } from "react-icons/gi";


const RoadMapStart = ({logo}) => {
    return (
        <div className="start">
            <div className="icon-container">
                    {logo}
            </div>
            <div className="line"></div>
        </div>
    )
}

export default RoadMapStart