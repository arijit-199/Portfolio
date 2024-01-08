import "./RoadMapBar.scss";

const RoadMapBar = ({Title, Details, Desc}) => {
    return (
        <div className="row-main">
            <div className="row">
                <div className="degree">
                    <h1>
                        {Title}
                    </h1>

                    <p>
                        {Details}
                    </p>
                </div>
                <div className="dot-circle">
                    <div className="dot"></div>
                </div>
                <div className="desc">
                    <p>
                        {Desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RoadMapBar