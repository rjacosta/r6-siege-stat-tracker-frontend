import React, { useState, useEffect } from "react";

const Stats = ({stats, forOpList}) => {
    console.log(forOpList)
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
        } else if (!hideAnimationOccuring && !showStats) {
            if (inContainer) {
                setContainerClass("opInfoContainerHideEnter");
            } else {
                setContainerClass("opInfoContainerHideOut");
            }     
        }
    }

    useEffect(() => {
        var container = document.getElementById("container");
        container.addEventListener("animationstart", () => setHideAnimationOccuring(true), false);
        container.addEventListener("animationend",  () => setHideAnimationOccuring(false), false);
    })

    return (
            <div id="container" className={(stats.ctu === undefined || forOpList) ? "" : containerClass }
                onMouseEnter={() => {toggleContainerClass(true, false)}}
                onMouseOut={() => {toggleContainerClass(false, false)}}
                onMouseDown={() => {toggleContainerClass(false, true)}}
                >
                {(stats.ctu === undefined || forOpList) ? null : 
                    <div className={"caption " + (showStats ? "opDataTitleShow" : "opDataTitleHide")}>Operator Stats</div>}
                <div id="dataGrid" className={(stats.ctu === undefined || forOpList) ? "opDataGrid": 
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