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

  return (
    <div
      className="opTile"
      style={{
        backgroundImage: `url(${opIcons(`./${opName}.png`)})`,
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
        src={opPics(`./${opName}.png`)}
        width="320"
        height="600"
      />
    </div>
  );
};

export default FavOperator;
