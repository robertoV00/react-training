function Popup({title, description}) {

    function confirmClicked() {
        console.log("Confirm has been clicked")
    }

    function cancelClicekd() {
        console.log("Cancel has been clicked")
    }

    return (
        <>
            <div className="popup">
                <span>{title}</span>
                <span> {description} </span>
                <div className="popup__btns">
                    <button className="popup__btn" onClick={() => confirmClicked()}>Confirm</button>
                    <button className="popup__btn popup__btn--cancel" onClick={() => cancelClicekd()}>Cancel</button>
                </div>
                </div>
                <div className="backdrop"></div>
        </>
    )
}

export default Popup