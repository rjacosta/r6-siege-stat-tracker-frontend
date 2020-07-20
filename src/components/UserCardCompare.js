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
    genericUserData,
    seasonalUserData,
  } = userData;
  const {
    genericUserData : genericUserCompareData,
    seasonalUserData : seasonalUserCompareData
  } = userCompareData;

  var userRankData = seasonalUserData.seasons[0].rankData;
  var userCompareRankData = seasonalUserCompareData.seasons[0].rankData;

  const mmrDiff = userRankData.mmr - userCompareRankData.mmr;
  const rankDiff = userRankData.rankNumber - userCompareRankData.rankNumber;
  const wlDiff = roundToPrecision(genericUserData.wl - genericUserCompareData.wl, 2);
  const winsDiff = genericUserData.wins - genericUserCompareData.wins;
  const lossesDiff = genericUserData.losses - genericUserCompareData.losses;
  const kdDiff = roundToPrecision(genericUserData.kd - genericUserCompareData.kd, 2);
  const killsDiff = genericUserData.kills - genericUserCompareData.kills;
  const deathsDiff = genericUserData.deaths - genericUserCompareData.deaths;

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
      <UserCard userData={userData} comparing={true} fadeInDirection={"left"} />
      <div className="userComparisonStatGrid">
        <div
          className={
            rankDiff > 0
              ? "userDataGreen"
              : rankDiff < 0
              ? "userDataRed"
              : "userDataBlack"
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
              : "userDataBlack"
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
              : "userDataBlack"
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
              : "userDataBlack"
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
              : "userDataBlack"
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
              : "userDataBlack"
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
              : "userDataBlack"
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
              : "userDataBlack"
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
              : "userDataBlack"
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
