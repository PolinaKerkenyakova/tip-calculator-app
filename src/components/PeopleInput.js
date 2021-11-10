import React, { useState } from "react";

const PeopleInput = (props) => {

    const peopleCountRef = React.createRef();
    const [addClass, setAddClass] = useState({ 'isNeeded': false, class: '' })

    const getPeopleCount = (e) => {

        const people = Number(e.target.value);

        if (!isNaN(people) && people > 0) {
            setAddClass({
                isNeeded: true,
                class: ' valid-input'
            });

            props.onPeopleCountEnter(Number(peopleCountRef.current.value));

        } else {
            setAddClass({
                isNeeded: true,
                class: ' invalid-input'
            });
        }
    }

    return (
        <>
            <h2 className="heading-secondary">Number of People</h2>
            <div className="input-container">
                <input type="text" className={`text-input ${addClass.isNeeded ? addClass.class : ''}`} placeholder="0" ref={peopleCountRef} onChange={getPeopleCount} />
                <div className="input-icon-container">
                    <img src="/images/icon-person.svg" alt="Small grey person icon" className="input-icon" />
                </div>
            </div>
        </>
    )
}

export default PeopleInput;