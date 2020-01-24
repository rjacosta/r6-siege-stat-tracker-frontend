import React from "react";
import { useHistory } from "react-router-dom";
import FavOperator from "./FavOperator";
import Rank from "./Rank";

const UserCard = ({ userData, comparing }) => {
  const CURRENT_SEASON = 16;
  const history = useHistory();
  if (!userData.hasData) {
    history.goBack();
    return null;
  }

  const AVATAR_URL =
    "https://ubisoft-avatars.akamaized.net/p_user/default_146_146.png";
  const {
    mmr,
    maxMmr,
    rank,
    maxRank,
    kills,
    deaths,
    kd,
    wins,
    losses,
    wl
  } = userData.rankedData;

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
      userData.prevUserRankedData.data[i]["mmr"],
      userData.prevUserRankedData.data[i]["rank"]
    ]);
  }

  const prevSeasonRankings = prevSeasonData.map(data => (
    <Rank key={data[0]} seasonNumber={data[0]} mmr={data[1]} rank={data[2]} />
  ));

  return (
    <div className={comparing ? "userCardCompare" : "userCard"}>
      {comparing ? null : <FavOperator opName={userData.favAttacker} opType="attacker" />}
      <div className="userNameAvatarRankContainer">
        <h2>{userData.name}</h2>
        <h5>Previous usernames: {aliasesList}</h5>
        <div className="avatarAndRankGridContainer">
          <div>
            <img
              alt="Avatar"
              src={AVATAR_URL.replace("p_user", userData.id)}
              width="169"
              height="169"
            />
            <span className="imgCaption">Level: {userData.level}</span>
          </div>
          <Rank seasonNumber={CURRENT_SEASON} mmr={mmr} rank={rank} />
          <Rank mmr={maxMmr} rank={maxRank} isMax={true} />
        </div>
        <div className="userCardDataGridContainer">
          <div className="userCardGridDataItem">W/L: {wl}</div>
          <div className="userCardGridDataItem">Wins: {wins}</div>
          <div className="userCardGridDataItem">Losses: {losses}</div>
          <div className="userCardGridDataItem">K/D: {kd}</div>
          <div className="userCardGridDataItem">Kills: {kills}</div>
          <div className="userCardGridDataItem">Deaths: {deaths}</div>
        </div>
        <h3>{"Previous Ranks"}</h3>
        <div className="avatarAndRankGridContainer">{prevSeasonRankings}</div>
      </div>
      {comparing ? null : <FavOperator opName={userData.favDefender} opType="defender" />}
    </div>
  );
};

export default UserCard;
