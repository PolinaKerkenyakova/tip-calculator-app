import React, { useState } from "react";

const BillInput = (props) => {

    const costRef = React.createRef();
    const [addClass, setAddClass] = useState({ 'isNeeded': false, class: '' })

    const getCostHandler = (e) => {

        const cost = Number(e.target.value);

        if (!isNaN(cost) && cost > 0) {
            setAddClass({
                isNeeded: true,
                class: ' valid-input'
            });

        props.onCostEnter(Number(costRef.current.value));
        } else {
            setAddClass({
                isNeeded: true,
                class: ' invalid-input'
            });
        }
    }

    return (
        <>
            <h2 className="heading-secondary">Bill</h2>
            <div className="input-container">
                <input type="text" className={`text-input ${addClass.isNeeded ? addClass.class : ''}`} placeholder="0" ref={costRef} onChange={getCostHandler} />
                <div className="input-icon-container">
                    <img src="/images/icon-dollar.svg" alt="Small grey dollar icon" className="input-icon" />
                </div>
            </div>
        </>
    )
}

export default BillInput;