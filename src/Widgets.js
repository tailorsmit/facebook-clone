import React from "react";
import './Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
            <iframe src='https://www.facebook.com/DwayneJohnson'
                    width='340px'
                    height='100%'
                    style={{border: "none", overflow: "hidden"}}
                    scrolling='no'
                    frameBorder='0'
                    allowTransparency='true'
                    allow='encrypted-media'/>

        </div>
    )
}

export default Widgets;