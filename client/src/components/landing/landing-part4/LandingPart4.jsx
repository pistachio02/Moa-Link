import React from 'react'
import '../css/LandingStyle.css'
import {Link} from 'react-router-dom'

function LandingPart4() {
    return (
        <div>
            <div className="part4-background">    
                        <h1>Manage your urls efficiently!</h1>
                        <Link to='/Login' ><button className="part4-btn">Get started</button></Link>
            </div>
        </div>
    )
}

export default LandingPart4
