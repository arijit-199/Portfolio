import "./RoadMapBar.scss";

const RoadMapBar = ({Title, Company, Tenure, Desc1, Desc2, Project1, Project2}) => {
    return (
        <div className="row-main">
            <div className="row">
                <div className="degree">
                    <h1>
                        {Title}
                    </h1>

                    <p className="company" style={{fontSize: 18, color: "aqua"}}>
                        {Company}
                    </p>

                    <p>
                        {Tenure}
                    </p>
                </div>
                <div className="dot-circle">
                    <div className="dot"></div>
                </div>
                <div className="desc">
                    <p>
                        {Desc1}
                    </p>

                    <p>
                        {Desc2}
                    </p>

                    <p className="company" style={{color: "aqua"}}><span style={{color: "white"}}>Projects done:</span> {Project1}, {Project2}</p>
                </div>
            </div>
        </div>
    )
}

export default RoadMapBar