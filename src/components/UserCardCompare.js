import React from "react";
import { useHistory } from "react-router-dom";
import UserCard from "./UserCard/UserCard";
import roundToPrecision from "../util/roundToPrecision"

const UserCardCompare = ({ userData, userCompareData }) => {
  const history = useHistory();
  if (
    !userData.hasData || !userCompareData.hasData
  ) {
    history.goBack();
    return null;
  }

  const {
    mmr: userMMR,
    rank: userRank,
    kills: userKills,
    deaths: userDeaths,
    kd: userKd,
    wins: userWins,
    losses: userLosses,
    wl: userWl
  } = userData.rankedData;

  const {
    mmr: userCompareMMR,
    rank: userCompareRank,
    kills: userCompareKills,
    deaths: userCompareDeaths,
    kd: userCompareKd,
    wins: userCompareWins,
    losses: userCompareLosses,
    wl: userCompareWl
  } = userCompareData.rankedData;

  const mmrDiff = userMMR - userCompareMMR;
  const rankDiff = userRank - userCompareRank;
  const wlDiff = roundToPrecision(userWl - userCompareWl, 2);
  const winsDiff = userWins - userCompareWins;
  const lossesDiff = userLosses - userCompareLosses;
  const kdDiff = roundToPrecision(userKd - userCompareKd, 2);
  const killsDiff = userKills - userCompareKills;
  const deathsDiff = userDeaths - userCompareDeaths;

  const compositeScore = 
    (mmrDiff > 0 ? 1 : (mmrDiff < 0 ? -1 : 0))
    + (rankDiff > 0 ? 1 : (rankDiff < 0 ? -1 : 0))
    + (wlDiff > 0 ? 1 : (wlDiff < 0 ? -1 : 0))
    + (winsDiff > 0 ? 1 : (winsDiff < 0 ? -1 : 0)) 
    + (lossesDiff > 0 ? 1 : (lossesDiff < 0 ? -1 : 0)) 
    + (kdDiff > 0 ? 1 : (kdDiff < 0 ? -1 : 0)) 
    + (killsDiff > 0 ? 1 : (killsDiff < 0 ? -1 : 0)) 
    + (deathsDiff > 0 ? -1 : (deathsDiff < 0 ? 1 : 0));

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
          rank {rankDiff}
        </div>
        <div
          className={
            mmrDiff > 0
              ? "userDataGreen"
              : mmrDiff < 0
              ? "userDataRed"
              : "userDataGray"
          }
        >
          MMR {mmrDiff}
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
