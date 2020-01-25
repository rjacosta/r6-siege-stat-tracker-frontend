import React from "react";
import getSeason from "../../util/getSeason";

const Rank = ({ seasonNumber, mmr, rank, isMax }) => {
  const ranks = require.context("../../../public/images/rank");
  const seasonName = getSeason(seasonNumber);
  return (
    <div>
      <span className="caption">{isMax ? "Max Rank" : seasonName}</span>
      <img
        alt="Rank"
        className="userRank"
        id="rank"
        src={ranks(`./${rank}.png`)}
        width="146"
        height="146"
      />
      <span className="caption">
        {isMax ? "Max " : ""}MMR: {mmr}
      </span>
    </div>
  );
};

export default Rank;
