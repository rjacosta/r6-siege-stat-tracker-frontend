import React, { useEffect, useState } from "react"
import Operator from "./Operator"
const OperatorList = ({operatorsData}) => {

    const mainOperatorList = [];

    var index = 0;
    operatorsData.forEach((op) => {
        if (op.name !== "Oryx" && op.name !== "Melusi" && op.name !== "Iana" && op.name !== "Ace" && op.name !== "Zero") {
            mainOperatorList.push(<Operator key={op.name} opData={op} hide={index !== 0} />);
            index++;
        }
    });

    const [opListObject, setOpListObject] = useState({
        opList: [mainOperatorList[0]],
        index: 0
    });

    useEffect(() => {
        document.addEventListener('scroll', () =>
        {
            var documentElement = document.documentElement;
            if (documentElement.scrollHeight - documentElement.scrollTop === documentElement.clientHeight)
            {
                setOpListObject(prevOpListObject => {
                    return {
                        opList: [...prevOpListObject.opList, mainOperatorList[prevOpListObject.index + 1]],
                        index: prevOpListObject.index + 1
                    }
                })
            }
        });
    });

    return (
        <div id="operatorList" >
            <li>
                {opListObject.opList}
            </li>
        </div>
    )
}

export default OperatorList;