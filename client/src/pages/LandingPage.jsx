import React from 'react'

import LandingHome from '../components/landing/landing-Home/LandingHome'

function Landing({userinfo, handleLogout}) {
    return (
        <div>
            <LandingHome userinfo={userinfo} handleLogout={handleLogout}/>
        </div>
    )
}

export default Landing