import React, { useState } from "react";
import Stats from "./Stats.js"
const FavOperator = ({operatorData}) => {
    
  const {name, role} = operatorData;
  const opIcons = require.context(
    "../../../public/images/operators/operatorIcons"
  );
  
  const opPics = require.context(
    "../../../public/images/operators/operatorPics"
  );

  const [showOpInfo, setShowOpInfo] = useState(false);
  const toggleOpInfo = () => {
    setShowOpInfo(!showOpInfo);
  };
  const operatorInfo = 
  <div id={"opInfoContainer" + role}
    className={showOpInfo ? "opInfoContainerShow" : "opInfoContainerHide"}>
      <Stats stats={operatorData} showOpInfo={showOpInfo} />
   </div>

  const nameLowerCase = name.toLowerCase();
  const roleLowerCase = role.toLowerCase();

  return (
    <div
      className="opTile"
      style={{
        backgroundImage: `url(${opIcons(`./${nameLowerCase}.png`)})`,
      }}
    >
      <span className="caption">
        Favorite {role} <br />
        {name}
      </span>
      <img
        alt="operator"
        className={roleLowerCase}
        src={opPics(`./${nameLowerCase}.png`)}
        width="320"
        height="600"
        onMouseDown={toggleOpInfo}
      />
      {operatorInfo}
    </div>
  );
};

export default FavOperator;
