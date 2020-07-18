import React from "react";

const FavOperator = (props) => {
    
  const {name, role} = props.operatorData;
  /*if (props.operatorData.name.startsWith("J") && props.operatorData.name.endsWith("ger"))
    name = "Jager";*/
  const opIcons = require.context(
    "../../../public/images/operators/operatorIcons"
  );
  
  const opPics = require.context(
    "../../../public/images/operators/operatorPics"
  );

  const nameLowerCase = name.toLowerCase();
  const roleLowerCase = role.toLowerCase();

  return (
    <div
      className="opTile"
      style={{
        backgroundImage: `url(${opIcons(`./${nameLowerCase}.png`)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "320px 320px"
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
    </div>
  );
};

export default FavOperator;
