import React, { useState } from "react";

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

  const [hovering, setHovering] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const onHoverEnter = () => setHovering(true);
  const onHoverLeave = () => setHovering(false);
  const getMouseCoord = (e) => {
    setClientX(e.clientX)
    setClientY(e.clientY)
  }
  const operatorInfo = hovering && (
    <span style={{
      position: "absolute",
      top: clientY,
      left: clientX,
      backgroundColor: "black"
    }} >
      Operator Info
    </span>
  )

  const nameLowerCase = name.toLowerCase();
  const roleLowerCase = role.toLowerCase();

  return (
    <div
      className="opTile"
      style={{
        backgroundImage: `url(${opIcons(`./${nameLowerCase}.png`)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "320px 320px",
        cursor: "none"
      }}
      onMouseMove={getMouseCoord}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
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
