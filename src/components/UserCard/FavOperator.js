import React from "react";
import Stats from "../Shared/Stats.js"
const FavOperator = ({operatorData}) => {
    
  const {name, role} = operatorData;
  const opIcons = require.context(
    "../../../public/images/operators/operatorIcons"
  );
  
  const opPics = require.context(
    "../../../public/images/operators/operatorPics"
  );


  const operatorInfo = 
  <div id={"opInfoContainer" + role}>
      <Stats stats={operatorData} forOpList={false} />
   </div>

  const nameLowerCase = name.toLowerCase();
  const roleLowerCase = role.toLowerCase();

  return (
    <div
      className="favOpTile"
      style={{
        backgroundImage: `url(${opIcons(`./${nameLowerCase}.png`)})`
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
      />
      {operatorInfo}
    </div>
  );
};

export default FavOperator;
