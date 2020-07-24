import React from "react";

const Stats = ({stats}) => {
    return (
        <div className={stats.ctu === undefined ? "userCardDataGridContainer" : "opDataGridContainer"}>
            <div className="caption">W/L: {stats.wl}</div>
            <div className="caption">Wins: {stats.wins}</div>
            <div className="caption">Losses: {stats.losses}</div>
            <div className="caption">K/D: {stats.kd}</div>
            <div className="caption">Kills: {stats.kills}</div>
            <div className="caption">Deaths: {stats.deaths}</div>
        </div>
    )
}

export default Stats;