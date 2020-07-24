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
    <div 
      className="opInfoContainer"
      style={{
      top: clientY - 20 + 'px',
      left: clientX - 160 + 'px'
    }} >
      <Stats stats={operatorData}/>
    </div>
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
        onMouseMove={getMouseCoord}
        onMouseOver={onHoverEnter}
        onMouseLeave={onHoverLeave}
      />
    {operatorInfo}
    </div>
  );
};

export default FavOperator;
