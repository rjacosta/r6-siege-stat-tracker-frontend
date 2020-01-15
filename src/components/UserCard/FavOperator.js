import React from "react";
import getOperatorType from "../../util/getOperatorType";

const FavOperator = ({ opName }) => {
  const opIcons = require.context(
    "../../../public/images/operators/operatorIcons"
  );
  const opPics = require.context(
    "../../../public/images/operators/operatorPics"
  );
  const opType = getOperatorType(opName);
  const opNameLowerCase = opName.toLowerCase();
  return (
    <div
      className="opTile"
      style={{
        backgroundImage: `url(${opIcons(`./${opNameLowerCase}.png`)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "320px 320px"
      }}
    >
      <span className="imgCaption">
        Favorite {opType} <br />
        {opName}
      </span>
      <img
        alt="operator"
        className={opType}
        src={opPics(`./${opNameLowerCase}.png`)}
        width="320"
        height="600"
      />
    </div>
  );
};

export default FavOperator;
