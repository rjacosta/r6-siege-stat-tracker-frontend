import React, { useState } from "react";

const Stats = ({stats}) => {
    
    const [showStats, setShowStats] = useState(true);
    const toggleShowStats = () => {
        setShowStats(!showStats);
    }
    const [hideAnimationOccuring, setHideAnimationOccuring] = useState(false);

    const [containerClass, setContainerClass] = useState("opInfoContainerShow")

    const toggleContainerClass = (inContainer, toggleStats) => {
        if (toggleStats) {
            setContainerClass(showStats ? 
            "opInfoContainerHide" : "opInfoContainerShow");
            toggleShowStats();
        } else if (!showStats) {
            setTimeout(() => {
                setHideAnimationOccuring(false);
                if (inContainer) {
                    setContainerClass("opInfoContainerHideEnter");
                } else {
                    setContainerClass("opInfoContainerHideOut");
                }
            }, hideAnimationOccuring ? 1000 : 0)            
        }
    }
/*console.log(document.getElementById("container"))
    const container = document.getElementById("container");
    container.addEventListener("animationstart",
    (e) => {
        if (container.classList.contains("opInfoContainerHide")) {
            setHideAnimationOccuring(true);
        }
    }, false)
    container.addEventListener("animationend", 
    (e) => {
        if (container.classList.contains("opInfoContainerHide")) {
            setHideAnimationOccuring(false);
        }
    }, false);*/
    return (
            <div id="container" className={stats.ctu === undefined ? "" : containerClass }
                onMouseEnter={() => {toggleContainerClass(true, false)}}
                onMouseOut={() => {toggleContainerClass(false, false)}}
                onMouseDown={() => {toggleContainerClass(false, true)}}
                >
                {stats.ctu === undefined ? null : 
                    <div className={"caption " + (showStats ? "opDataTitleShow" : "opDataTitleHide")}>Operator Stats</div>}
                <div className={stats.ctu === undefined ? "opDataGrid": 
                    (showStats ? "opDataGridShow" : "opDataGridHide")}>

                    <div className="caption">W/L: {stats.wl}</div>
                    <div className="caption">Wins: {stats.wins}</div>
                    <div className="caption">Losses: {stats.losses}</div>
                    <div className="caption">K/D: {stats.kd}</div>
                    <div className="caption">Kills: {stats.kills}</div>
                    <div className="caption">Deaths: {stats.deaths}</div>
                </div>

            </div>
    )
}

export default Stats;