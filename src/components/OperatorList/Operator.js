import React, { useState, useEffect } from "react";
import Stats from "../Shared/Stats.js"

const Operator = ({opData, remove, hide}) => {

    const {name} = opData;

    const opIcons = require.context(
        "../../../public/images/operators/operatorIcons"
      );
      
    const opPics = require.context(
        "../../../public/images/operators/operatorPics"
    );

    const nameLowerCase = name.toLowerCase();
    const [isHidden, setIsHidden] = useState(hide);

    var testFunc = () => {};
    useEffect(() => {
        testFunc = testFunc.bind(this);
        document.addEventListener('scroll', () =>
        {
            if (hide) return;
            var documentElement = document.documentElement;
            const opElement = document.getElementById(opData.name);
            if (opElement.getBoundingClientRect().y <= 0)
                remove(opData.name, 'top')
                    
            if (opElement.getBoundingClientRect().y >= documentElement.clientHeight) {
                remove(opData.name, 'bottom')
            }

        })
        
    });

    return ( 
        <div id={opData.name} className={isHidden ? "opListItemHide" : "opListItemShow"}>
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