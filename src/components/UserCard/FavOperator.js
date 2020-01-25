import React from "react";

const FavOperator = ({ opName, opType }) => {
  const opIcons = require.context(
    "../../../public/images/operators/operatorIcons"
  );
  const opPics = require.context(
    "../../../public/images/operators/operatorPics"
  );
  const opNameLowerCase = opName.toLowerCase();
  const opTypeLowerCase = opType.toLowerCase();

  return (
    <div
      className="opTile"
      style={{
        backgroundImage: `url(${opIcons(`./${opNameLowerCase}.png`)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "320px 320px"
      }}
    >
      <span className="caption">
        Favorite {opType} <br />
        {opName}
      </span>
      <img
        alt="operator"
        className={opTypeLowerCase}
        src={opPics(`./${opNameLowerCase}.png`)}
        width="320"
        height="600"
      />
    </div>
  );
};

export default FavOperator;
