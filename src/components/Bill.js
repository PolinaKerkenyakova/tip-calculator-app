const Bill = () => {
    return (

        <div className="bills m-top-med">
            <div>
                <div className="bill">
                    <div className="bill__title">
                        <h3 className="heading-tertiary">Tip Amount</h3>
                        <p className="bill__paragraph">/ person</p>
                    </div>
                    <div className="bill__amount">
                        <img src="/images/icon-dollar-cyan.svg" alt="Small cyan dollar icon" className="icon-cyan" />
                        4.27</div>
                </div>

                <div className="bill">
                    <div className="bill__title">
                        <h3 className="heading-tertiary">Total</h3>
                        <p className="bill__paragraph">/ person</p>
                    </div>
                    <div className="bill__amount">
                        <img src="/images/icon-dollar-cyan.svg" alt="Small cyan dollar icon" className="icon-cyan" />
                        4.27</div>
                </div>
            </div>
            <button className="btn btn-primary m-top-sm">RESET</button>
        </div>

    )

}


export default Bill;