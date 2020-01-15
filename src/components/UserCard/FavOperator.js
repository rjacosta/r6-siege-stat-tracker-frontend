import React from "react";
import getOperatorType from "../../util/getOperatorType";

const FavOperator = ({ opName }) => {
  const opType = getOperatorType(opName);
  return (
    <div
      className="opTile"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/operators/operatorIcons/${opName}.png)`,
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
        src={`${process.env.PUBLIC_URL}/images/operators/operatorPics/${opName}.png`}
        width="320"
        height="600"
      />
    </div>
  );
};

export default FavOperator;
