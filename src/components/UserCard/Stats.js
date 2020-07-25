import React from "react";

const Stats = ({stats, showOpInfo}) => {
    return (
        <div>
            {showOpInfo ? <div className="caption">Operator Stats</div> : null}
            <div className={stats.ctu === undefined ? "userCardDataGridContainer" : 
                (showOpInfo ? "opDataGridContainerShow" :"opDataGridContainerHide") }>
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