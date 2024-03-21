import React from "react"
import "./Header.css"
import circle from "../../assets/circle.png"
import gears from '../../assets/gears.svg'


const Header = () => {

    return (
        <>
            <div id="header">
                <div id="left">
                    <div id="logoCon">
                        <img src={circle} alt="logo" id="logo" />
                    </div>
                    <h4 id="logoName">
                        AISHAT ISMAIL
                    </h4>

                </div>
                <div id="right">
                    <a href="#heroPage">
                        <h5>About</h5>
                    </a>

                    <a href="#skill">
                        <h5>Skills</h5>
                    </a>
                    <a href="#parent">
                        <h5 id="proj"><img src={gears} alt="gears" id="gears" /> Projects</h5>
                    </a>
                    <a href="#home">
                        <h5>Contact</h5>
                    </a>

                </div>

            </div>

        </>
    )
}
export default Header