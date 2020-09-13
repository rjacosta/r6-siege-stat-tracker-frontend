import React, { useState } from "react";
import Stats from "../Shared/Stats.js"

const Operator = ({opData}) => {

    const {name} = opData;

    const opIcons = require.context(
        "../../../public/images/operators/operatorIcons"
      );
      
    const opPics = require.context(
        "../../../public/images/operators/operatorPics"
    );

    const nameLowerCase = name.toLowerCase();

    return ( 
        <div id={opData.name} className="opListItemShow">
            <img 
                className="opIconImg"
                alt="operatorIcon"
                src={opIcons(`./${nameLowerCase}.png`)}
                width="200"
                height="200"
            />
            <img
                className="opImg"
                alt="operator"
                src={opPics(`./${nameLowerCase}.png`)}
                width="320"
                height="600"
            />
            <Stats stats={opData} forOpList={true} />
        </div>
    );
}

export default Operator;