import React from "react";
import { useHistory } from "react-router-dom";
import roundToPrecision from "../../util/roundToPrecision"
import getOperator from "../../util/getOperator";
import FavOperator from "./FavOperator";
import Rank from "./Rank";

const UserCard = ({ userData, comparing }) => {
  const CURRENT_SEASON = 16;

  const history = useHistory();
  if (Object.keys(userData).length === 0) {
    history.goBack();
    return null;
  }

  const AVATAR_URL =
    "https://ubisoft-avatars.akamaized.net/p_user/default_146_146.png";
  const {
    NA_mmr,
    NA_maxmmr,
    NA_rank,
    NA_maxrank,
    NA_kills,
    NA_deaths,
    NA_wins,
    NA_losses
  } = userData.ranked;

  const username = userData.p_name;
  const pUser = userData.p_user;
  const userLevel = userData.p_level;
  const userFavAttacker = getOperator(userData.favattacker);
  const userFavDefender = getOperator(userData.favdefender);

  const userKd = roundToPrecision(NA_kills / NA_deaths, 0.005);
  const userWl = roundToPrecision(NA_wins / NA_losses, 0.005);

  var aliasesList = Object.keys(userData.aliases)
    .map(key => userData.aliases[key])
    .reduce((list, alias) => {
      return list + alias + ", ";
    }, "");
  aliasesList = aliasesList.slice(0, aliasesList.length - 2);

  const prevSeasonData = [];
  for (var i = 1; i <= 3; i++) {
    prevSeasonData.push([
      CURRENT_SEASON - i,
      userData["season" + (CURRENT_SEASON - i) + "mmr"],
      userData["season" + (CURRENT_SEASON - i) + "rank"]
    ]);
  }

  const prevSeasonRankings = prevSeasonData.map(data => (
    <Rank key={data[0]} seasonNumber={data[0]} mmr={data[1]} rank={data[2]} />
  ));

  return (
    <div className={comparing ? "userCardCompare" : "userCard"}>
      {comparing ? null : <FavOperator opName={userFavAttacker} />}
      <div className="userNameAvatarRankContainer">
        <h2>{username}</h2>
        <h5>Previous usernames: {aliasesList}</h5>
        <div className="avatarAndRankGridContainer">
          <div>
            <img
              alt="Avatar"
              src={AVATAR_URL.replace("p_user", pUser)}
              width="169"
              height="169"
            />
            <span className="imgCaption">Level: {userLevel}</span>
          </div>
          <Rank seasonNumber={CURRENT_SEASON} mmr={NA_mmr} rank={NA_rank} />
          <Rank mmr={NA_maxmmr} rank={NA_maxrank} isMax={true} />
        </div>
        <div className="userCardDataGridContainer">
          <div className="userCardGridDataItem">W/L: {userWl}</div>
          <div className="userCardGridDataItem">Wins: {NA_wins}</div>
          <div className="userCardGridDataItem">Losses: {NA_losses}</div>
          <div className="userCardGridDataItem">K/D: {userKd}</div>
          <div className="userCardGridDataItem">Kills: {NA_kills}</div>
          <div className="userCardGridDataItem">Deaths: {NA_deaths}</div>
        </div>
        <h3>{"Previous Ranks"}</h3>
        <div className="avatarAndRankGridContainer">{prevSeasonRankings}</div>
      </div>
      {comparing ? null : <FavOperator opName={userFavDefender} />}
    </div>
  );
};

export default UserCard;
