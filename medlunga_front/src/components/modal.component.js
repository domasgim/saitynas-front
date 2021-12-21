import React from 'react'

function Modal() {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button>X</button>
                <div className="title">
                    <h1>Are you sure you want to continue?</h1>
                </div>
                <div className="body">
                    <p>This action cannot be undone</p>
                </div>
                <div className="footer">
                    <button>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
