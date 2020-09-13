import React, { useEffect, useState } from "react"
import Operator from "./Operator"
const OperatorList = ({operatorsData}) => {

    const operatorList = [];

    
    var remove = (opName) => {
        console.log(onScreenOpList)
        var opIndexRemove = onScreenOpList.findIndex(op => op.name === opName);
        console.log(opIndexRemove);
        onScreenOpList.splice(opIndexRemove, 1);
    }

    operatorsData.forEach((op) => {
        if (op.name !== "Oryx" && op.name !== "Melusi" && op.name !== "Iana" && op.name !== "Ace" && op.name !== "Ace" && op.name !== "Zero")
        operatorList.push(<Operator key={op.name} opData={op} remove={remove} />);
    });
    
    const [onScreenOpList, setOnScreenOpList] = useState(operatorList.splice(0, 1));

    useEffect(() => {
        remove = remove.bind(this);
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