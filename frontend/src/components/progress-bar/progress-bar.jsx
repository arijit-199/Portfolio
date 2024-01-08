import "./progressBar.scss";

const ProgressBar = ({ skillName, skillValue, left }) => {
    return (
        <>
            <div className="skill">
                <div className="skill-info">
                    <p>{skillName}</p>
                    <p className="skill-value" style={{left: left}}>{skillValue}</p>
                </div>
                <div className="progress-bar-back">
                    <div className="progress-bar-front" style={{ width: skillValue }}>
                    </div>
                    <div className="dot"></div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar