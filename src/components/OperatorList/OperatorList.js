import React, { useEffect, useState, useRef } from "react"
import Operator from "./Operator"
const OperatorList = ({operatorsData}) => {

    const operatorList = [];

    var remove = (opName, topOrBottom) => {
        console.log(opName + " " + topOrBottom)
    }

    var index = 0;
    operatorsData.forEach((op) => {
        if (op.name !== "Oryx" && op.name !== "Melusi" && op.name !== "Iana" && op.name !== "Ace" && op.name !== "Zero") {
            operatorList.push(<Operator key={op.name} opData={op} remove={remove} hide={index !== 0} />);
            index++;
        }
    });

    const [opList, setOpList] = useState(operatorList);
    const [opBottomIndex, setOpBottomIndex] = useState(0);

    useEffect(() => {
        remove = remove.bind(this);
        document.addEventListener('scroll', () =>
        {
            var documentElement = document.documentElement;
            // figure out how to add to top when scroll up
            if (documentElement.scrollHeight - documentElement.scrollTop === documentElement.clientHeight)
            {
                setOpBottomIndex(opBottomIndex + 1);
                setOpList(prevOpList => {
                    console.log(opBottomIndex)
                    var prevOpProps = operatorList[opBottomIndex].props;
                    prevOpList.splice(opBottomIndex, 1);
                    return [...prevOpList, <Operator key={prevOpProps.opData.name} opData={prevOpProps.opData} remove={remove} hide={false} />]
                    var newOpList = [];
                    /*prevOpList.forEach((op) => {
                        
                        if (index === opBottomIndex) {
                            newOpList.push(<Operator key={prevOpProps.opData.name} opData={prevOpProps.opData} remove={remove} hide={false} />);
                        } else {
                            newOpList.push(op);
                        }
                    })
                    return newOpList;*/
                });
                console.log(opList)
            }
        });
    });

    return (
        <div id="operatorList" >
            <li>
                {opList}
            </li>
        </div>
    )
}

export default OperatorList;