const PeopleInput = () => {
    return (
        <>
            <h2 className="heading-secondary">Number of People</h2>
            <div className="input-container">
                <input type="text" className="text-input" />
                <div className="input-icon-container">
                    <img src="/images/icon-person.svg" alt="Small grey person icon" className="input-icon" />
                </div>
            </div>
        </>
    )
}

export default PeopleInput;