import React from "react"
import Operator from "./Operator"
const OperatorList = ({operatorsData}) => {

    const operatorList = [];
    operatorsData.forEach((op) => {
        if (op.name !== "Oryx" && op.name !== "Melusi" && op.name !== "Iana" && op.name !== "Ace")
        operatorList.push(<Operator key={op.name} opData={op} />);
    });
    console.log(operatorList)
    return (
        <div>
            <ul>
            {operatorList}
            </ul>
        </div>
    )
}

export default OperatorList;