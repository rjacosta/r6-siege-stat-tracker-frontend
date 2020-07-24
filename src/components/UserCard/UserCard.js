import React from "react";
import { useHistory } from "react-router-dom";
import FavOperator from "./FavOperator";
import Rank from "./Rank";
import Stats from "./Stats";

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

  var aliasesList = Object.keys(genericUserData.aliases)
    .map(key => genericUserData.aliases[key])
    .filter(alias => alias !== genericUserData.name)
    .reduce((list, alias) => {
      return list + alias + ", ";
    }, "");
  aliasesList = aliasesList.slice(0, aliasesList.length - 2);

  const currSeason = seasonalUserData.seasons[0];

  var prevRanksList = seasonalUserData.seasons.slice(1, 4).map((season) => 
    <Rank key={season.name} name={season.name} rankData={season.rankData} isMax={false} />
  );
  
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
          <Rank name={currSeason.name} rankData={currSeason.rankData} isMax={false} />
          <Rank name={currSeason.name} rankData={currSeason.maxRankData} isMax={true} />
        </div>
        <Stats stats={genericUserData}/>
        <h3 className="caption">{"Previous Ranks"}</h3>
        <div className="avatarAndRankGridContainer">
          {prevRanksList}
        </div>
      </div>
      {comparing ? null : <FavOperator operatorData={operatorsUserData.favDefender} />}
    </div>
  );
};

export default UserCard;
