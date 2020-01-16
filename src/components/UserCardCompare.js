import React from "react";
import { useHistory } from "react-router-dom";
import UserCard from "./UserCard/UserCard";
import roundToPrecision from "../util/roundToPrecision";

const UserCardCompare = ({ userData, userCompareData }) => {
  const history = useHistory();
  if (
    Object.keys(userData).length === 0 ||
    Object.keys(userCompareData).length === 0
  ) {
    history.goBack();
    return null;
  }

  const {
    NA_mmr: userMMR,
    NA_maxmmr: userMaxMMR,
    NA_rank: userRank,
    NA_maxrank: userMaxRank,
    NA_kills: userKills,
    NA_deaths: userDeaths,
    NA_wins: userWins,
    NA_losses: userLosses
  } = userData.ranked;

  const {
    NA_mmr: userCompareMMR,
    NA_maxmmr: userCompareMaxMMR,
    NA_rank: userCompareRank,
    NA_maxrank: userCompareMaxRank,
    NA_kills: userCompareKills,
    NA_deaths: userCompareDeaths,
    NA_wins: userCompareWins,
    NA_losses: userCompareLosses
  } = userCompareData.ranked;

  const userKd = roundToPrecision(userKills / userDeaths, 0.005);
  const userWl = roundToPrecision(userWins / userLosses, 0.005);
  const userCompareKd = roundToPrecision(
    userCompareKills / userCompareDeaths,
    0.005
  );
  const userCompareWl = roundToPrecision(
    userCompareWins / userCompareLosses,
    0.005
  );

  const rankDiff = userRank - userCompareRank;
  const wlDiff = userWl - userCompareWl;
  const winsDiff = userWins - userCompareWins;
  const lossesDiff = userLosses - userCompareLosses;
  const kdDiff = userKd - userCompareKd;
  const killsDiff = userKills - userCompareKills;
  const deathsDiff = userDeaths - userCompareDeaths;

  const compositeScore = 
    rankDiff > 0 ? 1 : rankDiff < 0 ? -1 : 0 
    + wlDiff > 0 ? 1 : wlDiff < 0 ? -1 : 0 
    + winsDiff > 0 ? 1 : winsDiff < 0 ? -1 : 0 
    + lossesDiff > 0 ? 1 : lossesDiff < 0 ? -1 : 0 
    + kdDiff > 0 ? 1 : kdDiff < 0 ? -1 : 0 
    + killsDiff > 0 ? 1 : killsDiff < 0 ? -1 : 0 
    + deathsDiff > 0 ? 1 : deathsDiff < 0 ? -1 : 0;

  return (
    <div className="userCardCompareGrid">
      <UserCard userData={userData} comparing={true} />
      <div className="userComparisonStatGrid">
        <div
          className={
            rankDiff > 0
              ? "userDataGreen"
              : rankDiff < 0
              ? "userDataRed"
              : "userDataGray"
          }
        >
          Rank {rankDiff}
        </div>
        <div
          className={
            wlDiff > 0
              ? "userDataGreen"
              : wlDiff < 0
              ? "userDataRed"
              : "userDataGray"
          }
        >
          W/L: {wlDiff}
        </div>
        <div
          className={
            winsDiff > 0
              ? "userDataGreen"
              : winsDiff < 0
              ? "userDataRed"
              : "userDataGray"
          }
        >
          Wins: {winsDiff}
        </div>
        <div
          className={
            lossesDiff > 0
              ? "userDataGreen"
              : lossesDiff < 0
              ? "userDataRed"
              : "userDataGray"
          }
        >
          Losses: {lossesDiff}
        </div>
        <div
          className={
            kdDiff > 0
              ? "userDataGreen"
              : kdDiff < 0
              ? "userDataRed"
              : "userDataGray"
          }
        >
          K/D: {kdDiff}
        </div>
        <div
          className={
            killsDiff > 0
              ? "userDataGreen"
              : killsDiff < 0
              ? "userDataRed"
              : "userDataGray"
          }
        >
          Kills: {killsDiff}
        </div>
        <div
          className={
            deathsDiff > 0
              ? "userDataRed"
              : deathsDiff < 0
              ? "userDataGreen"
              : "userDataGray"
          }
        >
          Deaths: {deathsDiff}
        </div>
        <div
          className={
            compositeScore > 0
              ? "userDataGreen"
              : compositeScore < 0
              ? "userDataRed"
              : "userDataGray"
          }
        >
          Composite Score: {compositeScore}
        </div>
      </div>
      <UserCard userData={userCompareData} comparing={true} />
    </div>
  );
};

export default UserCardCompare;
