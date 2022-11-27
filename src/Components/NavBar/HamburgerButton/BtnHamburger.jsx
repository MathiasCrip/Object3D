import React from 'react'
import "./BtnHamburger.css"

function BtnHamburger(props) {
    return (
        <>
            <div onClick={props.clickeo}
                className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default BtnHamburger
