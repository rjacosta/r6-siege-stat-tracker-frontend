import React, { useState, useEffect } from "react";
import Stats from "../Shared/Stats.js"

const Operator = ({opData, popTopOpListItem}) => {

    const {name} = opData;

    const opIcons = require.context(
        "../../../public/images/operators/operatorIcons"
      );
      
    const opPics = require.context(
        "../../../public/images/operators/operatorPics"
    );

    const nameLowerCase = name.toLowerCase();
    const [opListItemClassName, setOpListItemClassName] = useState("opListItemShow")

    const [onScreen, setOnScreen] = useState(true);

    useEffect(() => {
        var observer = new IntersectionObserver(function(entries) {
            // isIntersecting is true when element and viewport are overlapping
            // isIntersecting is false when element and viewport don't overlap
            if (entries[0].isIntersecting === true) {
                console.log("pop" + opData.name);
                popTopOpListItem();    
            }
        }, { threshold: [.1]});
        
        observer.observe(document.getElementById("opListItem"));
    }, [])

    return ( 
        <div id="opListItem" className={opListItemClassName}>
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