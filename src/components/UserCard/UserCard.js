import React from "react";
import { useHistory } from "react-router-dom";
import FavOperator from "./FavOperator";
import Rank from "./Rank";

const UserCard = ({ userData, comparing, fadeInDirection }) => {
  const history = useHistory();
  if (!userData.hasData) {
    history.goBack();
    return null;
  }
  const {
    genericUserData,
    seasonalUserData,
    operatorsUserData
  } = userData;

  console.log(genericUserData)

  var aliasesList = Object.keys(genericUserData.aliases)
    .map(key => genericUserData.aliases[key])
    .reduce((list, alias) => {
      return list + alias + ", ";
    }, "");
  aliasesList = aliasesList.slice(0, aliasesList.length - 2);

  const prevSeasonData = [];
  for (var i = 1; i <= 3; i++) {
    prevSeasonData.push([
      CURRENT_SEASON - i,
      userData.prevUserRankedData.data[i]["mmr"],
      userData.prevUserRankedData.data[i]["rank"]
    ]);
  }

  const prevSeasonRankings = prevSeasonData.map(data => (
    <Rank key={data[0]} seasonNumber={data[0]} mmr={data[1]} rank={data[2]} />
  ));
  
  const currSeason = seasonalUserData.seasons[0];
  
  return (
    <div className={(comparing ? (fadeInDirection === "left" ? "userCardCompareFadeInLeft" : "userCardCompareFadeInRight") : "userCard")}>
      {comparing ? null : <FavOperator operatorData={operatorsUserData.favAttacker} />}
      <div className="userNameAvatarRankContainer">
        <h2 className="caption">{genericUserData.name}</h2>
        <h4 className="caption">{`Previous usernames:  ${aliasesList}`}</h4>
        <div className="avatarAndRankGridContainer">
          <div>
            <img
              alt="Avatar"
              src={genericUserData.avatarURL}
              width="169"
              height="169"
            />
            <span className="caption">Level: {genericUserData.level}</span>
          </div>
          {/*<Rank seasonNumber={CURRENT_SEASON} mmr={mmr} rank={rank} />
          <Rank mmr={maxMmr} rank={maxRank} isMax={true} />*/}
        </div>
        <div className="userCardDataGridContainer">
          <div className="userCardGridDataItem">W/L: {genericUserData.wl}</div>
          <div className="userCardGridDataItem">Wins: {genericUserData.wins}</div>
          <div className="userCardGridDataItem">Losses: {genericUserData.losses}</div>
          <div className="userCardGridDataItem">K/D: {genericUserData.kd}</div>
          <div className="userCardGridDataItem">Kills: {genericUserData.kills}</div>
          <div className="userCardGridDataItem">Deaths: {genericUserData.deaths}</div>
        </div>
        {/*<h3 className="caption">{"Previous Ranks"}</h3>
        <div className="avatarAndRankGridContainer">{prevSeasonRankings}</div>*/}
      </div>
      {comparing ? null : <FavOperator operatorData={operatorsUserData.favDefender} />}
    </div>
  );
};

export default UserCard;
