import React from 'react'
import {Link} from 'react-router-dom'
import '../header/Header.css'
import logo from '../../../img/moalink.png'



function Header() {
    return (
        <div>
        <div className="header-background">
        <div className="header-container">
        <Link to="/" className="logo"><img src={logo} alt='로고'/></Link>
        <div className="grow"></div>
        <Link to="/UrlPage" className="header-flex-box">Url Service</Link>
        <Link to="/LogIn" className="header-flex-box">Log in</Link>
        <Link to="/SignUp" className="header-flex-box">Sign Up</Link>
        </div>
        </div>
        </div>
    )
}

export default Header
