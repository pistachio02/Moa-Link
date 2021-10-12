import React from 'react'
import Header from '../../common/header/Header'
import Footer from '../footer/Footer'
import LandingPart1 from '../landing-part1/LandingPart1'
import LandingPart2 from '../landing-part2/LandingPart2'
import LandingPart3 from '../landing-part3/LandingPart3'
import LandingPart4 from '../landing-part4/LandingPart4'
import LandingPart5 from '../landing-part5/LandingPart5'


function LandingHome({userinfo, handleLogout}) {
    return (
        <div>
            <Header userinfo={userinfo} handleLogout={handleLogout} />
            <LandingPart1 />
            <LandingPart2 />
            <LandingPart3 />
            <LandingPart4 />
            <LandingPart5 />
            <Footer />
        </div>
    )
}

export default LandingHome