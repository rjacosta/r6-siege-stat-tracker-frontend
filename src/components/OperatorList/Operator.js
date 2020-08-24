import React, { useState, useEffect } from "react";
import Stats from "../Shared/Stats.js"

const Operator = ({opData, deleteListItem}) => {

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

    const [justCreated, setJustCreated] = useState(true);

    /*useEffect(() => {
        var observer = new IntersectionObserver(function(entries) {
            // isIntersecting is true when element and viewport are overlapping
            // isIntersecting is false when element and viewport don't overlap
            if (entries[0].isIntersecting === true) {
                console.log("pop" + opData.name);
                popTopOpListItem();    
            }
        }, { threshold: [.1]});
        
        observer.observe(document.getElementById("opListItem"));
    }, [])*/

    useEffect(() => {

        const opListItem = document.getElementById(opData.name);
        /*console.log(opListItem)
        console.log(opListItem.getBoundingClientRect())
        if (opListItem.getBoundingClientRect().top < 0) {
            console.log(opData.name)
            console.log(opListItem.scrollTop)

        }*/
        document.addEventListener('scroll', () => {
            const opListItem = document.getElementById(opData.name);
            //console.log(opListItem.getBoundingClientRect())
            if (opListItem.getBoundingClientRect().top < 0) {
                deleteListItem(opData.name)
            }
        });

        /*function isElementOutViewport(el){
            var rect = el.getBoundingClientRect();
            return rect.bottom < 0 || rect.right < 0 
            || rect.left > window.innerWidth || rect.top > window.innerHeight;
        }*/

        /*var intersectionObserver = new IntersectionObserver(function(entries) {
            // If intersectionRatio is 0, the target is out of view
            // and we do not need to do anything.
            if (entries[0].intersectionRect.top == 0) { 
                console.log(entries);
            };
            console.log(opData.name)
            console.log(entries)
            if (entries[0].intersectionRect.top < 0) {
                console.log('out' + opData.name);
            }
          
          });
          // start observing
          intersectionObserver.observe(document.getElementById(opData.name));*/

    }, []);


    return ( 
        <div id={opData.name} className={opListItemClassName}>
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