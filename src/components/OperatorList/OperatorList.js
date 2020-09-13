import React, { useEffect, useState } from "react"
import Operator from "./Operator"
const OperatorList = ({operatorsData}) => {

    const operatorList = [];

    operatorsData.forEach((op) => {
        if (op.name !== "Oryx" && op.name !== "Melusi" && op.name !== "Iana" && op.name !== "Ace" && op.name !== "Ace")
        operatorList.push(<Operator key={op.name} opData={op} />);
    });
    
    const [onScreenOpList, setOnScreenOpList] = useState(operatorList.splice(0, 1));

    useEffect(() => {
        document.addEventListener('scroll', () =>
        {
            var documentElement = document.documentElement;
            if (documentElement.scrollHeight - documentElement.scrollTop === documentElement.clientHeight)
            {
                setOnScreenOpList(oldList => {
                    return [...oldList,  operatorList.splice(0, 1)[0]]
                });
            }
        });
    });

    return (
        <div id="operatorList" >
            <li>
                {onScreenOpList}
            </li>
        </div>
    )
}

export default OperatorList;