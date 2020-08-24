import React, { useEffect, useState } from "react"
import Operator from "./Operator"
const OperatorList = ({operatorsData}) => {

    const operatorList = [];

    this.deleteListItem = (opName) => {
        if (onScreenOpList.length === 1) return;
        console.log("here")
        setOnScreenOpList(oldList => {
            const i = oldList.findIndex(op => op.name === opName);
            if (i === 0) return oldList.slice(1);
            else return oldList.slice(0, oldList.length - 1);
        });
    };

    operatorsData.forEach((op) => {
        if (op.name !== "Oryx" && op.name !== "Melusi" && op.name !== "Iana" && op.name !== "Ace")
        operatorList.push(<Operator key={op.name} opData={op} deleteListItem={this.deleteListItem} />);
    });
    
    const [onScreenOpList, setOnScreenOpList] = useState(operatorList.splice(0, 1));

    useEffect(() => {
        this.deleteListItem = this.deleteListItem.bind(this);
    }, []);

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