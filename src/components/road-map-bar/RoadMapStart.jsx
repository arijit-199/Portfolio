import "./RoadMapBar.scss";


const RoadMapStart = ({logo, style}) => {
    return (
        <div className="start">
            <div className="icon-container">
                    {logo}
            </div>
            <div className="line" style={style}></div>
        </div>
    )
}

export default RoadMapStart