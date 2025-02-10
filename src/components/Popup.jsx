function Popup({title, closePopup}) {

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
                <div className="popup__btns">
                    <button className="popup__btn" onClick={() => confirmClicked()}>Confirm</button>
                    <button className="popup__btn popup__btn--cancel" onClick={() => closePopup()}>Cancel</button>
                </div>
                </div>
                <div className="backdrop" onClick={() => closePopup()}></div>
        </>
    )
}

export default Popup