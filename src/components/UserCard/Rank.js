import React from "react";
import getSeason from "../../util/getSeason";

const Rank = ({ seasonNumber, mmr, rank, isMax }) => {
  const seasonName = getSeason(seasonNumber);
  return (
    <div>
      <span className="imgCaption">{isMax ? "Max Rank" : seasonName}</span>
      <img
        alt="Rank"
        className="userRank"
        id="rank"
        src={`${process.env.PUBLIC_URL}/images/rank/${rank}.png`}
        width="146"
        height="146"
      />
      <span className="imgCaption">
        {isMax ? "Max " : ""}MMR: {mmr}
      </span>
    </div>
  );
};

export default Rank;
