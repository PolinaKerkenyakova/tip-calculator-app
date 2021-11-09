import Tip from "./Tip";

const TipSelector = () => {
    const tips = ['5%', '10%', '15%', '25%', '50%'];
    return (
        <div className="m-top-and-bottom-med">
            <h2 className="heading-secondary">Select Tip %</h2>
            <div className="tips">
                {tips.map(t => <Tip key={t}>{t}</Tip>)}

                <div className="tip-custom-input">
                    <input type="text" className="text-input" placeholder="Custom" />
                </div>

            </div>

        </div>
    )
}

export default TipSelector;