import React from "react";

const Rank = ({name, rankData, isMax}) => {
  return (
    <div>
      <span className="caption">{isMax ? "Max Rank" : name}</span>
      <img
        alt="Rank"
        className="userRank"
        id="rank"
        src={rankData.rankImgURL}
        width="146"
        height="146"
      />
      <span className="caption">
        {isMax ? "Max " : ""}MMR: {rankData.mmr}
      </span>
    </div>
  );
};

export default Rank;