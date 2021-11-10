import React, { useState } from "react";

import Tip from './Tip';

const TipSelector = (props) => {

    const tipAmountRef = React.createRef();
    const [addClass, setAddClass] = useState({ 'isNeeded': false, class: '' })

    const getTipAmountHandler = (e) => {

        const tip = Number(e.target.value);

        if (!isNaN(tip) && tip >= 0) {
            setAddClass({
                isNeeded: true,
                class: ' valid-input'
            });

            props.onTipAmountEntered(Number(tipAmountRef.current.value));

        } else {
            setAddClass({
                isNeeded: true,
                class: ' invalid-input'
            });
        }
    }

    const tips = ['5%', '10%', '15%', '25%', '50%'];
    return (
        <div className="m-top-and-bottom-med">
            <h2 className="heading-secondary">Select Tip %</h2>
            <div className="tips">
                {tips.map(t => <Tip key={t}>{t}</Tip>)}

                <div className="tip-custom-input">
                    <input type="text" className={`text-input ${addClass.isNeeded ? addClass.class : ''}`} placeholder="Custom" onChange={getTipAmountHandler} ref={tipAmountRef}/>
                </div>

            </div>

        </div>
    )
}

export default TipSelector;