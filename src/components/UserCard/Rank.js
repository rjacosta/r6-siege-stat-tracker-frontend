import React from "react";

const Rank = ({seasonalUserData, showMaxStats}) => {
  return (
    <div className="rankGridContainer">
      {BasicRankStructure(seasonalUserData.name, seasonalUserData.mmr, seasonalUserData.rankImgURL, false)}
      {showMaxStats && BasicRankStructure(seasonalUserData.name, seasonalUserData.maxmmr, seasonalUserData.maxRankImgURL, true)}
    </div>
  );
};

const BasicRankStructure = (name, mmr, rankImgURL, isMax) => {
  console.log(rankImgURL)

  return (
    <div>
      <span className="caption">{isMax ? "Max Rank" : name}</span>
      <img
        alt="Rank"
        className="userRank"
        id="rank"
        src={rankImgURL}
        width="146"
        height="146"
      />
      <span className="caption">
        {isMax ? "Max " : ""}MMR: {mmr}
      </span>
    </div>
  );
}
export default Rank;
