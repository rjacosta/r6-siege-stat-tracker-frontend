import React, { useState } from "react";

const Stats = ({stats}) => {
    
    const [showStats, setShowStats] = useState(true);
    const toggleShowStats = () => {
        setShowStats(!showStats);
    }

    const [containerClass, setContainerClass] = useState("opInfoContainerShow")

    const toggleContainerClass = (toggleBorder) => {
        if (!toggleBorder) {
            setContainerClass(showStats ? 
            "opInfoContainerHide" : "opInfoContainerShow");
            toggleShowStats();
        } else {
            setContainerClass("opInfoContainerHideEnter")
        }
    }

    return (
            <div className={stats.ctu === undefined ? "" : containerClass }
                onMouseEnter={() => {toggleContainerClass(true)}}
                onMouseExit={() => {toggleContainerClass(true)}}
                onMouseDown={() => {toggleContainerClass(false)}}
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