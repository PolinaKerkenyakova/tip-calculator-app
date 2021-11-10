const BillInput = () => {
    return (
        <>
            <h2 className="heading-secondary">Bill</h2>
            <div className="input-container">
                <input type="text" className="text-input" placeholder="0" />
                <div className="input-icon-container">
                    <img src="/images/icon-dollar.svg" alt="Small grey dollar icon" className="input-icon" />
                </div>
            </div>
        </>
    )
}

export default BillInput;