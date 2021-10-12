import React from 'react'
import '../css/LandingStyle.css'
import ImgPart1 from '../../../img/part1.png'

function LandingPart1() {
    return (
        <div className="part1-background">
            <div className="part1-container">
                <div className="part1-text">
                    <h1 className="part1-title">Manage URLs on Moa Link.</h1>
                    <p>Your url will be specially managed by LinkMoa. 
                         If you would like to know more please click the link below</p>
                     <a href="https://github.com/codestates/Moa-Link/wiki"><button className="part1-btn">show Wiki</button></a>
                </div>
                <img className="part1-img" src={ImgPart1} alt="Landing part1_img" />
            </div>
        </div>
    )
}

export default LandingPart1
